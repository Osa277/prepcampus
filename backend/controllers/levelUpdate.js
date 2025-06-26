const stageUpdateService = require("../services/stageUpdateService");

const levelUpdate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { stageToUpdate } = req.body;

    const levelUpdateResult = await stageUpdateService.stageUpdate(
      userId,
      stageToUpdate
    );
    return new SuccessResponse(
      res,
      200,
      "Level updated successfully",
      levelUpdateResult
    ).send();
  } catch (err) {
    next(err);
  }
};

module.exports = levelUpdate;
