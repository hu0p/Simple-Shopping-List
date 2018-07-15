const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys.js").mongoURI;

// Database 🔌⚡️
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected Successfully."))
  .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server initialized on port ${port}`));
