const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const NoteSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Registered",
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

let Notes = mongoose.model("Notes", NoteSchema);
module.exports = Notes;
