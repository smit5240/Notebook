const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const KEY = process.env.KEY;

const isAuthenticated = async (req, res, next) => {
  let token = req.header("token");
  let verification = await jwt.verify(token, KEY);
  req.decode = verification.id;
  // console.log(req);
  next();
};
module.exports = isAuthenticated;
