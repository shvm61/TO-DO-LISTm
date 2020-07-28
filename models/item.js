const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
