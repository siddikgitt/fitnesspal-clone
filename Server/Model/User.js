const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: String,
    password: String,
    dob: Date,
    goal: String,
    gender: String,
    height: Number,
    currweight: Number,
    goalweight: Number,
    country: String,
    calories: Number,
    daily_activity: String,
    workout_week: Number,
    weekly_goal: String,
    signup_date: Date,
    
});

const UserModel = mongoose.model("fitnesspal", UserSchema)

module.exports = UserModel;