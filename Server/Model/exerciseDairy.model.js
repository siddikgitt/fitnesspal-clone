const mongoose=require("mongoose");
const exerciseDairySchema=new mongoose.Schema({
  date:String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
  exercise:[{type:mongoose.Schema.Types.ObjectId,ref:"exercise"}]
})
const ExerciseDairy= mongoose.model("exerciseDairy",exerciseDairySchema);
module.exports=ExerciseDairy;