const express = require("express");
const eventsRoute = require("./event.route");
const speakersRoute = require("./speaker.route");
const topicsRoute = require("./topic.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/events",
    route: eventsRoute,
  },
  {
    path: "/speakers",
    route: speakersRoute,
  },
  {
    path: "/topics",
    route: topicsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
