const express = require("express");
const speakersController = require("../../controllers/speakers.controller");
const router = express.Router();

router
  .route("/")
  .get(speakersController.getSpeakers)
  .post(speakersController.createSpeaker)
  .put(speakersController.updateSpeaker);

module.exports = router;
