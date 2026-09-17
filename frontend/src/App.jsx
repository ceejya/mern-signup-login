import React from "react"
import {Routes, Route} from "react-router-dom"
import SignupForm from "./components/Signup"
import Login from "./components/Login"
import {ToastContainer} from "react-toastify"
import VerifyOtp from "./components/verifyotp"
import Dashboard from "./components/Dashboard"
import AddProduct from "./components/AddProduct"


const App = ()=> {
  return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<SignupForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />
        <Route path="/Dashboard" element={<Dashboard/>}  />
        <Route path="/add-product" element={<AddProduct/>}  />

      </Routes>


    </div>
  )
  
} 


export default App
