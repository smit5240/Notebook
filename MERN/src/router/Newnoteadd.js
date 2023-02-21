const express = require("express");
const router = express.Router();
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const KEY = process.env.KEY;
const Notes = require("../models/Notes");
const fetchuser = require("../../middleware/verifytoken");
const isAuthenticated = require("../../middleware/Authicate_User");

// router.post("/note", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     let token = req.header("token");
//     if (!token) {
//       return res
//         .status(502)
//         .send({ status: 502, message: "Enter a Valid token" });
//     } else {
//       let verify = await JWT.verify(token, KEY);
//       if (!verify) {
//         return res
//           .status(402)
//           .json({ status: 402, message: "Not verify", verify });
//       }
//       const note = new Notes({
//         title,
//         description,
//         user: verify._id,
//       });
//       await note.save();
//       res.status(200).send({ status: 200, message: "Save Note" });
//     }
//   } catch (error) {
//     res.json({ message: "ERROR", error });
//     console.log(error);
//   }
// });

router.get("/allnote", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.decode });
    res.status(200).json({ message: "Show AllNotes", notes });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: 400, message: error });
  }
});

router.post("/addnote", fetchuser, async (req, res) => {
  try {
    const { title, description } = req.body;
    let id = req.decode;
    const note = new Notes({
      title,
      description,
      user: id,
    });
    const save = await note.save();
    if (!save) {
      return res.status(400).json({ status: 400, message: err });
    }
    return res
      .status(200)
      .json({ status: 200, message: "Note Save Successful" });
  } catch (ERROR) {
    console.log(ERROR);
    return res.status(402).json({ status: 402, message: ERROR });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const fetch = await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note is Deleted", fetch });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
