const express = require("express");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv").config();
KEY = process.env.KEY;

const fetchuser = async (req, res, next) => {
  let token = req.header("token");
  if (!token) {
    return res.status(404).send({ message: "Enter valid token" });
  }
  try {
    let verify = await JWT.verify(token, KEY);
    if (!verify) {
      return res.status(402).json({ status: 402, message: "Not verify token" });
    }
    req.decode = verify._id;
    next();
  } catch (error) {
    res.status(402).send({ error: "please enter valid token" });
  }
};
module.exports = fetchuser;
