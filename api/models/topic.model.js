const moment = require("moment");
const logger = require("../utils/logger");

let topics = [];

const addTopic = (topicObject) => {
  let id = topics.length + 1;
  let createdDate = moment.utc();
  let newTopic = { id, ...topicObject, createdDate };
  logger.info(`Provided event data: ${JSON.stringify(topicObject)}`);
  topics.unshift(newTopic);
};

const updateTopic = (topicObject) => {
  const existingTopic = topics.findIndex((item) => item.id == topicObject.id);
  if (topicObject != null) {
    let existingTopics = topics;
    let modifiedDate = moment.utc();
    topicObject.modifiedDate = modifiedDate;
    existingTopics[existingTopic] = { ...topicObject };
    topics = [...existingTopics];
  }
};

module.exports = {
  topics,
  addTopic,
  updateTopic,
};
