import React from "react"
import {Routes, Route} from "react-router-dom"
import SignupForm from "./components/Signup"
import Login from "./components/Login"
import {ToastContainer} from "react-toastify"
import VerifyOtp from "./components/verifyotp"
import Dashboard from "./components/Dashboard"


const App = ()=> {
  return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<SignupForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />
        <Route path="/Dashboard" element={<Dashboard/>}  />

      </Routes>


    </div>
  )
  
} 


export default App