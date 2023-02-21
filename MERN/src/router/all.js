const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/schema");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../../middleware/Authicate_User");
const dotenv = require("dotenv").config();
KEY = process.env.KEY;
// ....................................................................   Sing Up   .....
router.post("/register", async (req, res) => {
  const { name, email, mobile, password, cpassword } = req.body;
  if (!name || !email || !mobile || !password || !cpassword) {
    return res.status(404).send({ message: "Fill All Property" });
  }
  const USER = await User.findOne({ email: email });
  if (USER) {
    return res.status(400).send({ status: 400, message: "User Already Exist" });
  } else {
    const user = new User({ name, email, mobile, password, cpassword });
    let newUser = await user.save();
    if (newUser) {
      res
        .status(200)
        .send({ status: 200, message: "User Registed Successfully" });
    } else {
      res.status(400).send({ status: 400, message: "Registed Not Success" });
    }
  }
});
// ...........................................................................   Sing in   .....

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send({ message: "Fill All Property", status: 404 });
  } else {
    const userlogin = await User.findOne({ email });
    if (!userlogin) {
      return res.status(400).json({ message: "NOT MATCH", status: 400 });
    } else {
      const mathch = await bcrypt.compare(password, userlogin.password);
      if (!mathch) {
        return res
          .status(402)
          .send({ ERROR: "Invalid Creadientials", status: 402, mathch });
      } else {
        const { email, _id } = userlogin;
        const details = { email, _id };
        const token = jwt.sign(details, KEY);
        return res
          .status(200)
          .send({ token, status: 200, message: "Login SUCCESS" });
      }
    }
  }
});
// ..........................................................................   get Alluser  ......
router.get("/alluser", async (req, res) => {
  try {
    let all = await User.find();
    res.status(200).json({ message: "All User is Your Page", all });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Note Find", error });
  }
});

//............................................................................  delete User  ......

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    let delet = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "User is deleted", delet });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//.........................................................................   Update User  .........

router.put("/update/:id", async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ message: "User Updated", update });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
