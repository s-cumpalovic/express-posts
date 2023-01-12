const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const loggingMiddleware = require("./middlewares/loggingMiddleware");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(loggingMiddleware, bodyParser.json());

// Import routes
const postsRoute = require("./routes/posts");

app.listen(3000);
app.use("/posts", postsRoute);

// Database
require("./db");
