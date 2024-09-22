require("dotenv").config(); // Add this at the top of your file
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./backend/config/connect");
const clientMessageRouter = require("./backend/routes/clientMessageRouter");

app.use(express.json())

app.use("/message", clientMessageRouter);

connectDB();
app.listen(port, () => console.log(`Server running on port ${port}`));
