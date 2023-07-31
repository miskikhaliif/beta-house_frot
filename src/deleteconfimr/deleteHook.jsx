import React, { useState } from 'react'

export  const DeleteHook =() =>{
    const[open,setopen]=useState(false)
    const[message,setmessage]=useState('')

    const Toggle = () =>{
        setopen(!open)
    }
  return {open ,Toggle, message, setmessage}
}
