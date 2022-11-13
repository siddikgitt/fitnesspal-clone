const express=require("express");
const { getExerciseDairyByDate, addExerciseDairy, deleteExerciseDairy } = require("../Controller/exerciseDairy.controller");
const app=express.Router();
const server_error=(e)=>{
    return {
        message:e.message,
        error:true
    }
}
app.get("/",async (req,res)=>{
    try {
        let date=req.query.date;
        let response=await getExerciseDairyByDate(date);
        res.status(200).send(response);
        
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

app.post("/",async (req,res)=>{
    try {
        let data=req.body;
        // const token=req.headers["authorization"]
        let response=await addExerciseDairy(data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})
app.delete("/:id",async (req,res)=>{
    try {
        let id=req.params.id;
        let date=req.query.date;
        // console.log(id,date)
        let response=await deleteExerciseDairy(date,id);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

module.exports=app;