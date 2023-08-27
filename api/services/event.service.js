const logger = require("../utils/logger");
const { Event } = require("../models");

const getEvents = async () => {
  const events = Event.events;
  return events;
};

const createEvent = async (eventBody) => {
  return await Event.createEvent(eventBody);
};

const updateEvent = async (eventBody) => {
  return await Event.updateEvent(eventBody);
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
};
