const express = require("express");
const eventsRoute = require("./event.route");
const speakersRoute = require("./speaker.route");
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
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
