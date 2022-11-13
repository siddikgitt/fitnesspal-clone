const mongoose = require("mongoose");
const foodDairySchema = new mongoose.Schema({
  date: String,
  time: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  foodID: { type: mongoose.Schema.Types.ObjectId, ref: "food" },
});
const SimpleFoodDairy = mongoose.model("simplefoodDiary", foodDairySchema);
module.exports = SimpleFoodDairy;
