const moment = require("moment");
const logger = require("../utils/logger");

let speakers = [];

const createSpeaker = (speakerObject) => {
  let id = speakers.length + 1;
  let createdDate = moment.utc();
  let newSpeaker = { id, ...speakerObject, createdDate };
  logger.info(`Provided event data: ${JSON.stringify(newSpeaker)}`);
  speakers.unshift(newSpeaker);
};

const updateSpeaker = (speakerObject) => {
  const existingSpeaker = speakers.findIndex(
    (item) => item.id == speakerObject.id
  );
  if (existingSpeaker != null) {
    let existingSpeakers = speakers;
    let modifiedDate = moment.utc();
    speakerObject.modifiedDate = modifiedDate;
    existingSpeakers[existingSpeaker] = { ...speakerObject };
    speakers = [...existingSpeakers];
  }
};

module.exports = {
  speakers,
  createSpeaker,
  updateSpeaker,
};
