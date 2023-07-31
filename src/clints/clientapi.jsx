import axios from 'axios'
import React from 'react'
import { config } from '../../../api/config'
export const  Getclients =async() =>{
  return await config.get("/client")
}
export const  Gtbyidclients =async(id) =>{
    return await config.get(`/client/${id}`)
  }
  export const  Postclients =async(data) =>{
    return await config.post("/client",data)
  }
  export const  Putclients =async(id,data) =>{
    return await config.put(`/client/${id}`,data)
  }
  export const  Deleteclients =async(id) =>{
    return await config.delete(`/client/${id}`)
  }




