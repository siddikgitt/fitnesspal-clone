const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    dob: Date
});

const UserModel = mongoose.model("userjwt", UserSchema)

module.exports = UserModel;