const express = require("express");
const topicsController = require("../../controllers/topics.controller");
const router = express.Router();

router
  .route("/")
  .get(topicsController.getTopics)
  .post(topicsController.addTopic)
  .put(topicsController.updateTopic);

module.exports = router;
