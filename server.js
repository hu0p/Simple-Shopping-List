const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

// parse JSON
app.use(express.json());

// DB config 🗝
const db = require("./config/keys.js").mongoURI;

// Database Connection 🔌⚡️
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected Successfully."))
  .catch(error => console.log(error));

// use the routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server initialized on port ${port}`));
