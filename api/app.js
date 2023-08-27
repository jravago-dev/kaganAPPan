const app = require("./config/express");
const logger = require("./utils/logger");
const routes = require("./routes/v1");

app.use("/v1", routes);

app.listen(3000, () => {
  logger.info("Server said hello!");
});
