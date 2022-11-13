const Food = require("../Model/food.model");

const getAllFood=async ()=>{
    let allFood=await Food.find();
    return {
        message:allFood,
        error:false
    }
}
const addFood=async (data)=>{
    let isFood=await Food.find();
    if(isFood.length>0){
        return {
            message:"Already Exists.",
            error:false
        }
    }
    else{
        let res=await Food.create(data);
        console.log(res)
        return {
            message:"success",
            error:false
    }
    }
}
const searchFoodByQuery=async (q)=>{
    let allFood=await Food.find({FoodDescription:{$regex:q}});
    return {
        message:allFood,
        error:false
    }
}
const UpdateFoodById=async (id,data)=>{
    await Food.updateOne({_id:id},{$set:data})
    return {
        message:"success",
        error:false
    }
}

module.exports={getAllFood, addFood, UpdateFoodById}