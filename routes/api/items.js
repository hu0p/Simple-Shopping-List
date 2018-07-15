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

// @route   POST api/items
// @descr   Create an item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items:id
// @descr   Delete an item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove()
  .then( () => res.send(`The item with the id "${req.params.id}" has been deleted successfully`))
  )
  .catch(err => res.status(404).send(`The item with the id "${req.params.id}" cannot be found or deleted`));
});


module.exports = router;
