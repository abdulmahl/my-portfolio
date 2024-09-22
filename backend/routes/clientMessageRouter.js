const clientMessageRouter = require("express").Router();
const clientMessageController = require("../controllers/clientMessageController");

clientMessageRouter
  .route("/")
  .post(clientMessageController.createClientMessage);

module.exports = clientMessageRouter;
