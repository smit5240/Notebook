const express = require("express");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const router = express.Router();
// const fetchuser = require("../../middleware/verifytoken");
// const { body, validationResult } = require("express-validator");
// const Notes = require("../models/Notes");
const KEY = process.env.KEY;

router.post(
  "/fetchuser",
  // [
  //   body("title", "Enter a valid title").isLength({ min: 3 }),
  //   body("description", "discription must be atlist 5 character").isLength({
  //     min: 5,
  //   }),
  // ],
  async (req, res) => {
    const { title, description } = req.body;
    let token = req.header("token");
    if (!token) {
      return res
        .status(502)
        .send({ status: 502, message: "Enter a Valid token" });
    } else {
      await JWT.verify(token, KEY)
        .then((e) => {
          console.log(e);

          const note = new Notes({
            title,
            description,
            // user: req.user.id,
          });
          const savenotev = note.save();
          res.json(savenotev);
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).send({ message: "ERROR" });
        });
    }
  }
);

// router.post("/fetchuser", fetchuser, async (req, res) => {
//   let user = req.decode;
//   console.log(user);
// });

router.post("/addnote");
