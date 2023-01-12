const mongoose = require("mongoose");
require('dotenv/config');

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to MongoDB database");
});