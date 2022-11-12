const mongoose=require("mongoose");
const foodDairySchema=new mongoose.Schema({
  Date:String,
  User:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
  Breakfast:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  Lunch:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  Dinner:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  Snacks:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}]
 
})
const FoodDairy= mongoose.model("foodDairy",foodDairySchema);
module.exports=FoodDairy;