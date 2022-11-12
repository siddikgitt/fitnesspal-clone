const express=require("express");
const { addFoodDairy, getFoodDairyByDate, deleteFoodDairy } = require("../Controller/foodDairy.controller");
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
        console.log(date)
        let response=await getFoodDairyByDate(date);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

app.post("/",async (req,res)=>{
    try {
        let data=req.body;
        // const token=req.headers["authorization"]
        let response=await addFoodDairy(data);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})
app.delete("/:id",async (req,res)=>{
    try {
        let id=req.params.id;
        let {date,type}=req.body;
        let response=await deleteFoodDairy(date,type,id);
        res.status(200).send(response);
    } catch (e) {
       res.status(500).send(server_error(e)); 
    }
})

module.exports=app;