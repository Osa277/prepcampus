const redisClient = require("../config/RedisConfig");

async function saveUsedSlug(userId, level, slug) {
  if (!redisClient) {
    console.warn("Redis not available, slug tracking disabled");
    return;
  }
  try {
    const key = `usedSlugs:${userId}:level-${level}`;
    await redisClient.sAdd(key, slug);
  } catch (err) {
    console.warn("Failed to save used slug:", err.message);
  }
}

async function getUsedSlugs(userId, level) {
  if (!redisClient) {
    console.warn("Redis not available, returning empty slug set");
    return new Set();
  }
  try {
    const key = `usedSlugs:${userId}:level-${level}`;
    const slugs = await redisClient.sMembers(key);
    return new Set(slugs);
  } catch (err) {
    console.warn("Failed to get used slugs:", err.message);
    return new Set();
  }
}

/**
 *  @param {Number} level 
 *  @param {Number} userId 
 **/

async function savePrevLevel(userId, level) {
  const isExist = await redisClient.exists(userId);
  if (isExist) {
    const oldLevel = Number(await redisClient.get(userId));
    const compare = level > oldLevel;
    if (compare) {
      await redisClient.set(userId, level);
    }
    return compare;
  }
  await redisClient.set(userId, level);
  return false;
}

async function clearAllUserSlugs(userId) {
  const pattern = `usedSlugs:${userId}:level-*`;
  const keys = await redisClient.keys(pattern);
  if (keys.length > 0) {
    await redisClient.del(...keys);
  }
}

module.exports = {
  saveUsedSlug,
  getUsedSlugs,
  clearAllUserSlugs,
  savePrevLevel,
};
