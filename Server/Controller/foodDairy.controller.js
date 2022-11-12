const FoodDairy = require("../Model/foodDairy.model");
const jwt=require("jsonwebtoken");
const getFoodDairyByDate=async (date)=>{
    let data=await FoodDairy.find({Date:date}).populate("Breakfast").populate("Lunch").populate("Dinner").populate("Snacks");
    return {
        message:data,
        error:false
    }
}
const addFoodDairy=async (data)=>{
    let date=data.Date;
    let foodDairy=await FoodDairy.find({Date:date});
    if(foodDairy.length>0){
     let food=await FoodDairy.updateOne({Date:date},{$set:data});
     return {
        message:food,
        error:false
    }
    }
    else{
        // let user=jwt.verify(token,process.env.SECRET_KEY)
        let food=await FoodDairy.create(data);
        // food["User"]=user._id;
        // food.save();
        return {
            message:food,
            error:false
        }
    }
}
const deleteFoodDairy=async (date,type,id)=>{
    let food= await FoodDairy.find({Date:date});
    let foodArr=food[type].filter((el)=>el!==id)
    await FoodDairy.updateOne({Date:date},{$set:{[type]:foodArr}})
    return{
        message:"deleted",
        error:false
    }
}

module.exports={getFoodDairyByDate,addFoodDairy,deleteFoodDairy}