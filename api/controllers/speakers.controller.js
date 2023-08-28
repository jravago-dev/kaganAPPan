const httpStatus = require("http-status");
const { speakerService } = require("../services");

const getSpeakers = async (req, res) => {
  const result = await speakerService.getSpeakers();
  res.status(httpStatus.OK).send(result);
};

const createSpeaker = async (req, res) => {
  await speakerService.createSpeaker(req.body);
  const result = await speakerService.getSpeakers();
  res.status(httpStatus.CREATED).send(result);
};

const updateSpeaker = async (req, res) => {
  await speakerService.updateSpeaker(req.body);
  const result = await speakerService.getSpeakers();
  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getSpeakers,
  createSpeaker,
  updateSpeaker,
};
