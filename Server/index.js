const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("./Model/User");
var passport = require("passport");
require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect=require("./Utils/dbConnect");
const foodRouter=require("./Routes/food.route");
const foodDairyRouter=require("./Routes/foodDairy.route");
const exerciseRouter=require("./Routes/exercise.route")
const exerciseDairyRouter=require("./Routes/exerciseDairy.route")
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID_FB,
      clientSecret: process.env.CLIENT_SECRET_FB,
      callbackURL: "http://localhost:3000/auth/facebook/secrets",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      let user = await User.find({ facebookId: profile.id });
      if(!user){
          User.create({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
          });
      }
      return res.send("user is there")
    }
  )
);

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/secrets",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);
app.use("/food",foodRouter);
app.use("/foodDairy",foodDairyRouter);
app.use("/exercise",exerciseRouter);
app.use("/exerciseDairy",exerciseDairyRouter);
app.get('/', (req, res) => res.send('Myfitnesspal'))

app.listen(3000, () => {
  console.log("server started");
});




