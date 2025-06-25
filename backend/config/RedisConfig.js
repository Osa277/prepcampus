const redis = require("redis");
const redisClient = redis.createClient();

redisClient.on("connect", () => {
  console.log("redis connected");
});

redisClient.off("error", (err) => {
  console.error("error occured at redis connect: ", err);
});

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
