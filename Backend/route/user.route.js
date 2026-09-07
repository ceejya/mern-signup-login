const express = require("express")

const userrouter = express.Router()

const {Signup, Login, verifyOtp} = require("../controller/user.controller") 


userrouter.post("/signup", Signup)
userrouter.post("/login", Login)
userrouter.post("/verifyotp", verifyOtp)

module.exports = userrouter

