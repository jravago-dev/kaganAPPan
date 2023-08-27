const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
