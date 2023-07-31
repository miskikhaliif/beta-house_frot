import axios from 'axios'
import React from 'react'
import { config } from '../../../api/config'
export const  Getabouts =async() =>{
  return await config.get("/abouts")
}
export const  Gtbyidabouts =async(id) =>{
    return await config.get(`/abouts/${id}`)
  }
  export const  Postabouts =async(data) =>{
    return await config.post("/abouts",data)
  }
  export const  Putabouts =async(id,data) =>{
    return await config.put(`/abouts/${id}`,data)
  }
  export const  Deleteabouts =async(id) =>{
    return await config.delete(`/abouts/${id}`)
  }




