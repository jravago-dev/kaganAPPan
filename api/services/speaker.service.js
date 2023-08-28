const logger = require("../utils/logger");
const { Speaker } = require("../models");

const getSpeakers = async () => {
  const speakers = Speaker.speakers;
  return speakers;
};

const createSpeaker = async (speakerBody) => {
  return await Speaker.createSpeaker(speakerBody);
};

const updateSpeaker = async (speakerBody) => {
  return await Speaker.updateSpeaker(speakerBody);
};

module.exports = {
  getSpeakers,
  createSpeaker,
  updateSpeaker,
};
