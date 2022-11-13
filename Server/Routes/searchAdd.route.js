const express = require("express");
const cors = require("cors");
const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

const Food = require("../Model/food.model");
const SimpleFoodDairy = require("../Model/simpleFoodDiary.model");

app.post("/searchallbyname", async(req, res) => {
    console.log(1);
    const {name} = req.body;
    const list = await Food.find({"FoodDescription": name})
    res.status(200).send(list);
})

app.get("/searchall", async(req, res) => {
    const list = await Food.find()
    res.status(200).send(list);
})

app.post("/addfoodtouser", async (req,res) => {
    const {date, time, userID, foodID} = req.body;
    const addThis = await SimpleFoodDairy.create({"data": date, "time": time, "userID": userID, "foodID": foodID});
    if(addThis){
        return res.status(200).send(`Added the Data ${addThis}`);
    }
    return  res.status(401).send(`Something is wrong`);
})

app.post("/searchfood_dairy", async(req,res) => {
    const {userID} = req.body;
    const list = await SimpleFoodDairy.find({"userID": userID}).populate("foodID");
    res.send(list)
})

module.exports = app