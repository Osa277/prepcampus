const stageUpdateService = require("../services/stageUpdateService");

const levelUpdate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { stageToUpdate } = req.body;

    const levelUpdateResult = await stageUpdateService.stageUpdate(
      userId,
      stageToUpdate
    );
    return res.status(200).json(levelUpdateResult);
  } catch (err) {
      next(err)
  }
};

module.exports = levelUpdate