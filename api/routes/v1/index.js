const express = require("express");
const eventsRoute = require("./event.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/events",
    route: eventsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;