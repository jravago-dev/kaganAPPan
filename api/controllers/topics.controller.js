const httpStatus = require("http-status");
const { topicService } = require("../services");

const getTopics = async (req, res) => {
  const result = await topicService.getTopics();
  res.status(httpStatus.OK).send(result);
};

const addTopic = async (req, res) => {
  await topicService.addTopic(req.body);
  const result = await topicService.getTopics();
  res.status(httpStatus.CREATED).send(result);
};

const updateTopic = async (req, res) => {
  await topicService.updateTopic(req.body);
  const result = await topicService.getTopics();
  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getTopics,
  addTopic,
  updateTopic,
};
