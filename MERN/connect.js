const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Api = process.env.NEWSOLE;
const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(Api)
    .then(() => {
      console.log("Connection SuccessFull");
    })
    .catch((error) => {
      console.log("ERROR : ", error.message);
    });
};

module.exports = connectToMongo;
