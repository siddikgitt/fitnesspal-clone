const mongoose=require("mongoose");
const foodSchema=new mongoose.Schema({
    Restaurant:String,
    FoodDescription:String,
    ServingSize:String,
    Calories:String,
    Sodium:String,
    TotalFat:String,
    Potassium:String,
    Saturated:String,
    TotalCarbs:String,
    Polyunsaturated:String,
    DietaryFiber:String,
    Monosaturated:String,
    Sugar:String,
    Trans:String,
    Protein:String,
    Cholesterol:String,
    VitaminA:String,
    VitaminC:String,
    Calcium:String,
    Iron:String,
})
const Food=mongoose.model("food",foodSchema);
module.exports=Food;