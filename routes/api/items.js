const express = require("express");
const router = express.Router();

// get the Item model
const Item = require("../../models/Item");

// @route   GET api/items
// @descr   Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   GET api/items
// @descr   Create A Post
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
