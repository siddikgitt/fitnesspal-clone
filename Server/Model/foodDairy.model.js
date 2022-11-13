const mongoose=require("mongoose");
const foodDairySchema=new mongoose.Schema({
  date:String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
  breakfast:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  lunch:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  dinner:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}],
  snacks:[{type:mongoose.Schema.Types.ObjectId,ref:"food"}]
 
})
const FoodDairy= mongoose.model("foodDairy",foodDairySchema);
module.exports=FoodDairy;