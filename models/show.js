const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const showSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  creator: String,
  premiere_year: Number,
  end_year: Number,
  seasons: Number,
  genre: String,
  rating: Number,
});

const Show = model("Show", showSchema);
module.exports = Show;
