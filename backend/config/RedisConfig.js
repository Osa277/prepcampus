const redis = require("redis");

let redisClient = null;

try {
  redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  redisClient.on("connect", () => {
    console.log("Redis connected successfully");
  });

  redisClient.on("error", (err) => {
    console.warn("Redis connection error (running without Redis):", err.message);
    redisClient = null;
  });

  // Try to connect (non-blocking)
  (async () => {
    try {
      await redisClient.connect();
    } catch (err) {
      console.warn("Redis is not available, running without cache");
      redisClient = null;
    }
  })();

} catch (err) {
  console.warn("Redis configuration failed, running without Redis:", err.message);
  redisClient = null;
}

module.exports = redisClient;
