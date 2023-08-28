const logger = require("../utils/logger");
const { Topic } = require("../models");

const getTopics = async () => {
  const topics = Topic.topics;
  return topics;
};

const addTopic = async (topicObject) => {
  return await Topic.addTopic(topicObject);
};

const updateTopic = async (topicObject) => {
  return await Topic.updateTopic(topicObject);
};

module.exports = {
  getTopics,
  addTopic,
  updateTopic,
};
