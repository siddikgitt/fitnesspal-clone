const express = require("express");
const app = express.Router();
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.post("/login", async (req, res) => {
  try {
    let user = await User.findOne(req.body);
    if (!user) {
      res.send({ message: "Invalid Credentials", error: true });
    }
    let data = { id: user._id, email: user.email, password: user.password };
    // set id in LS
    //set user id
    const token = jwt.sign(data, process.env.JWT_SECRETKEY, {
      expiresIn: "5 minutes",
    });
    // console.log(token);
    const refreshToken = jwt.sign(data, process.env.JWT_REFRESHKEY, {
      expiresIn: "7 days",
    });
    res.send({
      message: { data: data, token: token, refreshToken: refreshToken },
      error: false,
    });
  } catch (error) {
    res.send({ message: error.message, error: true });
  }
});

app.post("/signup", async (req, res) => {
  const data = req.body;
  const user = await User.create(data);
  if (user) {
    return res.status(200).send("signup successfully");
  }
  return res.status(401).send("Invalid Credentials");
});

app.post("/refresh", (req, res) => {
  try {
    let { refreshToken_for_newToken } = req.body;
    if (!refreshToken_for_newToken) {
      res.send({ message: "Invalid Credentials", error: true });
    }
    const data = jwt.verify(
      refreshToken_for_newToken,
      process.env.JWT_REFRESHKEY
    );
    let user_data = {
      id: data._id,
      email: data.email,
      password: data.password,
    };

    // userDetails
    localStorage.setItem("userCred", user_data.id);
    const new_Token = jwt.sign(user_data, process.env.JWT_SECRETKEY, {
      expiresIn: "5 minutes",
    });
    res.send({
      message: {
        data: user_data,
        token: new_Token,
        refreshToken: refreshToken_for_newToken,
      },
      error: false,
    });
  } catch (error) {
    res.send({ message: error.message, error: true });
  }
});

module.exports = app