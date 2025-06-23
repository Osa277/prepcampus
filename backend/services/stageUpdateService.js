const levelModel = require("../models/userLevelModel");
const userModel = require("../models/UserModel");
const errorMessage = require("../utils/errorMessage");
const validateFields = require("../utils/validateFields");

class StageUpdate {
  async stageUpdate(userId, stageToUpdate) {
    validateFields(["userId", "stageToUpdate"], { userId, stageToUpdate });

    const user = await userModel.findById(userId);
    if (!user || !user.levels) throw errorMessage("Invalid UserId", 400);

    const levelId = user.levels;
    const levelDoc = await levelModel.findById(levelId);
    if (!levelDoc || !levelDoc[stageToUpdate])
      throw errorMessage("Invalid stage", 400);

    const currentLevel = levelDoc[stageToUpdate]?.level || 1;
    const newLevel = currentLevel + 1;
    let updateFields = { [`${stageToUpdate}.level`]: newLevel };

    let currentBadgeLevel = levelDoc[stageToUpdate]?.badge || 0;
    if (newLevel % 3 === 0) {
      updateFields[`${stageToUpdate}.badge`] = currentBadgeLevel + 1;
    }

    await levelModel.findByIdAndUpdate(levelId, { $set: updateFields });

    return {
      level: newLevel,
      badge: currentBadgeLevel,
    };
  }
}

module.exports = new StageUpdate();
