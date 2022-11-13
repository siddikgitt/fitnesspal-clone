const User = require("./Model/User");
require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect=require("./Utils/dbConnect");
const foodRouter=require("./Routes/food.route");
const foodDairyRouter=require("./Routes/foodDairy.route");
const exerciseRouter=require("./Routes/exercise.route")
const exerciseDairyRouter=require("./Routes/exerciseDairy.route")
const facebookOauth = require("./Routes/facebookOauth.route")
const loginRouter = require("./Routes/login.route");

//siddik
const foodRoute = require("./Routes/searchAdd.route")
const cors = require("cors");

dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());


app.use("/food",foodRouter);
app.use("/foodDairy",foodDairyRouter);
app.use("/exercise",exerciseRouter);
app.use("/exerciseDairy",exerciseDairyRouter);
app.use("/auth", facebookOauth);
app.use("/", loginRouter);

//siddik
app.use("/simplefood", foodRoute);


app.listen(8080, () => {
  console.log("server started");
});




