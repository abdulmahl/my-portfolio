const mongoose = require("mongoose");

const ClientMessageSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClientMessage = mongoose.model("ClientMessages", ClientMessageSchema);

module.exports = ClientMessage;
