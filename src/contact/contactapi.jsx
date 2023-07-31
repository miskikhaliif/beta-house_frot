import { config } from "../../../api/config"

export const GetCntact = async () =>{
    return await config.get("/contact")
}
export const GetbyCntact = async (id) =>{
    return await config.get(`/contact/${id}`)
}
export const PostCntact = async (data) =>{
    return await config.post("/contact",data)
}
export const PutCntact = async (id,data) =>{
    return await config.put(`/contact/${id}`,data)
}
export const DeleteCntact = async (id) =>{
    return await config.delete(`/contact/${id}`)
}