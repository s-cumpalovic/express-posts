const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const loggingMiddleware = require("./middlewares/loggingMiddleware");

// Middlewares
app.use(loggingMiddleware, bodyParser.json());

// Import routes
const postsRoute = require("./routes/posts");

app.listen(3000);
app.use("/posts", postsRoute);

// Database
require("./db");
