const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts')

app.listen(3000);
app.use('/posts', postsRoute);

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to MongoDB database");
});
