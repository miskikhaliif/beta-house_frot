import axios from 'axios'
import React from 'react'
import { config } from '../../../api/config'

export  const Getserevice = async() =>{
    return await config.get("/service")
}
export  const Getidserevice = async(id) =>{
    return await config.get(`/service/${id}`)
}  
export  const Postserevice = async(data) =>{
    return await config.post("/service",data)
}  
export  const Updateserver = async(id,data) =>{
    return await config.put(`/service/${id}`,data)
}  
export  const Deleteserevice = async(id) =>{
    return await config.delete(`/service${id}`)
}    
