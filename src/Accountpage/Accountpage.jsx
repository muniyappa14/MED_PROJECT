import React from 'react'
import axios from "axios"
import axiosinstance from '../Axiosinstance/Axiosinstance'

const Accountpage = () => {
  const [address,setaddress]=React.useState('')
  const [city,setcity]=React.useState('')
  const [state,setstate]=React.useState('')
  const [pincode,setpincode]=React.useState('')
  const [phonenumber,setphonenumber]=React.useState('')

  const accounthandler=(event)=>{
    event.preventDefault()
    axiosinstance.post("http://localhost:5000/account",{
      address:address,
      city:city,
      state:state,
      pincode:pincode,
      phonenumber:phonenumber
    }
    ,{config:{headers:localStorage.getItem("token")}}
    )
    .then((Response)=>{
      let result=Response.data
      console.log(result)
      alert("booked successfully")
    })
    .catch((err)=>{
      console.log({"error":err})
    })
  }
  return (
    <div>
     
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form className='form-group'>
              <label>Address : </label>
              <input type='text' className='form-control' value={address} onChange={(event)=>{
                setaddress(event.target.value)
              }} /> <br />
              <label>City : </label>
              <input type='text' className='form-control' value={city}  onChange={(event)=>{
                setcity(event.target.value)
              }}/> <br />
              <label>State : </label>
              <input type='text' className='form-control' value={state} onChange={(event)=>{
                setstate(event.target.value)
              }}/> <br />
              <label>Pincode : </label>
              <input type='text' className='form-control' value={pincode} onChange={(event)=>{setpincode(event.target.value)}} /> <br />
              <label>Phone number : </label>
              <input type='text' className='form-control' value={phonenumber} onChange={(event)=>{setphonenumber(event.target.value)}} /> <br />
          <div className="row">
            <div className="col-4"></div>
            <div className="col-2">
            <button className='btn btn-primary '>Confirm</button>
            </div>
          </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accountpage

