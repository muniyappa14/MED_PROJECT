import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
const navigate=useNavigate()
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const registerHandler=(event)=>{
  event.preventDefault()
  axios.post("http://localhost:5000/register",{
    name:name,
    email:email,
    password:password
  })
  .then((res)=>{
   const result=res.data
   console.log(result)
   if(result.hasOwnProperty("error")){
    alert("user already exist")
   }else{
    alert("user registered successfull")
    navigate("/login")
   }
  })
  .catch((err)=>{
    console.log(err)
  })
}
  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={registerHandler}>
        <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Name:</label> 
            <input type="text" className='form-control' value={name} onChange={(event)=>{setName(event.target.value)}} required/>
          </div>
          <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Email:</label> 
            <input type="text" className='form-control'  value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
          </div>
          <div className='form-group'>
            <label className='mt-4 ' style={{fontSize:20}} >Password:</label> 
            <input type="text" className='form-control' value={password} onChange={(event)=>{setPassword(event.target.value)}} required/>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-1"><button className='btn btn-primary'>register</button></div>
          </div>
          <div className='mt-2'><p>existing user <Link to={"/login"}>login</Link></p></div>

        </form></div>
      </div>
    </div>
    </div>
  )
}

export default Register
