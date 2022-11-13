const jwt=require("jsonwebtoken");
const ExerciseDairy = require("../Model/exerciseDairy.model");
const getExerciseDairyByDate=async (date)=>{
    let data=await ExerciseDairy.find({date:date}).populate("exercise");
    return {
        message:data,
        error:false
    }
}
const addExerciseDairy=async (data)=>{
    let {date,id}=data;
    let isDate=await ExerciseDairy.findOne({date:date});
    if(isDate){
        let exerciseDairy=await ExerciseDairy.findOneAndUpdate({date:date},{$push:{exercise:id}},{upsert:true});
        return{
            message:exerciseDairy,
            error:false
        }
        
    }
        let exercise=await ExerciseDairy.create({date:date});
        exercise["exercise"]=id;
        exercise["type"]=type
        exercise.save();
        return {
            message:exercise,
            error:false
        }
  
}
const deleteExerciseDairy=async (date,id)=>{
    // console.log(date,id)

    const del=await ExerciseDairy.updateOne({date:date},{$pullAll:{exercise:[{_id:id}]}})
    console.log(del)
    return {
        message:"deleted",
        error:false
    }

    // Favorite.updateOne({ cn: req.params.name }, {
    // $pullAll: {
    //     favorites: [{_id: req.params.deleteUid}],
    // },


}

module.exports={getExerciseDairyByDate,addExerciseDairy,deleteExerciseDairy}