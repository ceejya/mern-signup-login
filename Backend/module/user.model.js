const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username: { type: String, trim: true, required: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true }
})

const userblurprint = mongoose.model("userinfo", userschema)



module.exports = userblurprint


