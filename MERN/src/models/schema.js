const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

Userschema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 15);
  }
  next();
});

const User = mongoose.model("Registered", Userschema);
module.exports = User;
