import React from 'react'
import axios from 'axios'
const axiosinstance=axios.create()
axiosinstance.interceptors.request.use((config)=>{
 let token=localStorage.getItem("token")
 if(token){
    config.headers["Authorization"]=token
 }
 return config



}, (err)=>{
    Promise.reject(err)
})
export default axiosinstance
