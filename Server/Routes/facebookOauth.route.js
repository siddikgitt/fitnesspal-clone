var passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
const express = require("express");
const app = express.Router();
const User = require("../Model/User");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID_FB,
      clientSecret: process.env.CLIENT_SECRET_FB,
      callbackURL: "http://localhost:3000/auth/facebook/secrets",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile.id);
      let user = await User.find({ facebookId: profile.id });
      if (!user) {
        User.create({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    }
  )
);

app.get("/facebook", passport.authenticate("facebook"));

app.get(
  "/facebook/secrets",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);

module.exports = app;