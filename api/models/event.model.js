const moment = require("moment");
const logger = require("../utils/logger");

let events = [];

const createEvent = (eventObject) => {
  let id = events.length + 1;
  let createdDate = moment.utc();
  let newEvent = { id, ...eventObject, createdDate };
  logger.info(`Provided event data: ${JSON.stringify(newEvent)}`);
  events.unshift(newEvent);
};

const updateEvent = (eventObject) => {
  const existingEvent = events.findIndex((item) => item.id == eventObject.id);
  if (existingEvent != null) {
    let existingEvents = events;
    let modifiedDate = moment.utc();
    eventObject.modifiedDate = modifiedDate;
    existingEvents[existingEvent] = { ...eventObject };
    events = [...existingEvents];
  }
};

module.exports = {
  events,
  createEvent,
  updateEvent,
};
