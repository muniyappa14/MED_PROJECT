import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const navigate=useNavigate()
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const loginHandler=(event)=>{
      event.preventDefault()
      
      if(email.length && password.length !==0){
      try{
              axios.post("http://localhost:5000/login",{
              email:email,
              password:password
            })
              .then((res)=>{
                const token=res.data.token
                localStorage.setItem("token",token)
                if(!token){
                  alert(res.data)
                  
                }else{
                  alert("login succesfull")
                  navigate("/account")
                }
            })
              .catch((err)=>{
                  console.log(err)
              })  
      }     
      catch(err){
        console.log(err)
      }  
    }
    else{
      alert("email or password are not be empty")
    }
    }
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
       <div className="col-4">
       <form onSubmit={loginHandler} >
          <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Email:</label>
             <input type="text" className='form-control' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
          </div>
          <div className='form-group'>
            <label className='mt-4 ' style={{fontSize:20}} >Password:</label>
             <input type="text" className='form-control' value={password} onChange={(event)=>{setPassword(event.target.value)}} />
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-1"><button className='btn btn-primary'>login</button></div>
          </div>
          <div className='mt-2'><p>new user <Link to={"/register"}>register</Link></p></div>
        </form>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Login