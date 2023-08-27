const express = require("express");
const eventsController = require("../../controllers/events.controller");
const router = express.Router();

router
  .route("/")
  .get(eventsController.getEvents)
  .post(eventsController.createEvent)
  .put(eventsController.updateEvent);

module.exports = router;
