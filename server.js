const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts')

app.listen(3000);
app.use('/posts', postsRoute);

// Database
require('./db')