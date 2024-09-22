const ClientMessage = require("../models/ClientMessageSchema");

const createClientMessage = async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    const newMessage = new ClientMessage({
      firstname,
      lastname,
      email,
      message,
    });

    await newMessage.save();

    res
      .status(200)
      .json({ message: `Message from ${firstname} added successfully` });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating client message",
      error: err.message,
    });
  }
};

module.exports = { createClientMessage };
