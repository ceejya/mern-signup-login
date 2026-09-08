const express = require("express")

const userrouter = express.Router()

const {Signup, Login, verifyOtp, Verifytoken} = require("../controller/user.controller") 


userrouter.post("/signup", Signup)
userrouter.post("/login", Login)
userrouter.post("/verifyotp", verifyOtp)
userrouter.get("/verifytoken", Verifytoken)


module.exports = userrouter

