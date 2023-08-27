const httpStatus = require("http-status");
const { eventService } = require("../services");

const getEvents = async (req, res) => {
  const result = await eventService.getEvents();
  res.status(httpStatus.OK).send(result);
};

const createEvent = async (req, res) => {
  await eventService.createEvent(req.body);
  const result = await eventService.getEvents();
  res.status(httpStatus.CREATED).send(result);
};

const updateEvent = async (req, res) => {
  await eventService.updateEvent(req.body);
  const result = await eventService.getEvents();
  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
};
