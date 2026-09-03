import React from "react"
import {Routes, Route} from "react-router-dom"
import SignupForm from "./components/Signup"
import Login from "./components/Login"
import {ToastContainer} from "react-toastify"


const App = ()=> {
  return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<SignupForm/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>


    </div>
  )
  
} 


export default App