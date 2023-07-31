import { Alert, Box, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HouseIcon from '@mui/icons-material/House';
import ClintList from './clintList';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { Deleteclients, Getclients, Postclients, Putclients } from './clientapi';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form'
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
  useMutation,
  isError
} from 'react-query'
import {toast} from 'react-toastify'
import {DeleteHook} from '../deleteconfimr/deleteHook';
import Dletecofirm from '../deleteconfimr/dletecofirm';
export const Client=()=> {
  const queryclient=useQueryClient()
  const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
  const [dailog, setdailog]=useState(false)
  const[clintid,setclintid]=useState('')
  const[cdelid, setdeid]=useState('')
  const dailogg = () =>{
    setdailog(!dailog)
  }

  const {data: client,isLoading,isError} =useQuery({
    queryKey:['client'],
    queryFn: async () => await Getclients(),
    onError: () =>{
      toast.error("not saved")
    }
  })



  const {mutate,isLoading:mutateLoading} =useMutation({
    mutationFn: async (data) => await Postclients(data),
    
    onSuccess:()=>{
      queryclient.invalidateQueries({queryKey:['client']})
      toast.success("Data Has been Saved")
  },
  onError:()=>{
  toast.error("data has not been saved !")
  }
})
  const {mutate:updateMutate, isLoading:updateLoading} =useMutation({
    mutationFn: async(data)=>{
      return await Putclients(clintid,data)
    },
    onSuccess:()=>{
      queryclient.invalidateQueries({queryKey:['client']})
      toast.success("data has been updated")
      dailogg()
  },

  onError:(e)=>{
  
      toast.error("data has not been updated")
      console.log(e)
  }

  })

  const addclient = async (data) =>{
    if(clintid !==''){
      try {
        updateMutate(data)
        reset()
        
      } catch (error) {
        console.log("has not updated")
        
      }
    }
    else{
      try {
       mutate(data)
       dailogg()
      reset()
      console.log("saved")
      } catch (error) {
        console.log("error")
      }
     
    }

    
  }

  const updateclint = async (data) =>{
    setValue("name",data.name)
    setValue("clientlogo",data.clientlogo)
    setclintid(data._id)
    dailogg()
  }

  const {mutate:deleteMotate} =useMutation({
    mutationFn:(id)=> Deleteclients(id)
  })
const delhook = DeleteHook()

const deletCheck = () =>{
  deleteMotate(cdelid)
}
  const deleteclien = async(data) =>{
    delhook.Toggle(data.name)
    delhook.setmessage()
    console.log("data has been dleted",data)
    setdeid(data._id)

  }
  <Dletecofirm daologopen={delhook.open} dailogclose={delhook.Toggle} message={delhook.setmessage} confirm={deletCheck}/>
  // <Dletecofirm open={delhook.open} toggle={delhook.Toggle} message={delhook.setmessage} confirm={deletCheck}/>
  return (
    <div>
     <Box p={4}>
     <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="#">
    Dashboard
  </Link>
 
  <Typography color="text.primary">Client</Typography>
</Breadcrumbs>


      <Divider sx={{height:"10px"}}/>
<Box  sx={{display:"flex", justifyContent:"space-between"}} my={4}>
<Typography>list Clint</Typography>
<IconButton onClick={dailogg}>
<AddIcon/>
</IconButton>
</Box>


<Dialog open={dailog}
onClose={dailogg}
>
  <DialogTitle>Add New Client</DialogTitle>
  <Box component={"form"} onSubmit={handleSubmit(addclient)}>
  <DialogContent>
    <Box sx={{width:"400px"}} mt={2}>
      <Stack spacing={2} direction={'column'}>
      <TextField label="Client Name" {...register("name")} variant="outlined" size="small" fullWidth/>
     <TextField label="Client logo"{...register("clientlogo")} variant="outlined" size="small" fullWidth/>
      </Stack>
    </Box>

  </DialogContent>

  <DialogActions>
    <Button onClick={dailogg}>Close</Button>
    <Button variant='contained' disabled={mutateLoading} sx={{bgcolor:"primary.main"}} type='submit' size='small'>
    
    {clintid !==''? "update" : "submit"}
    </Button>

  </DialogActions>
  </Box>
</Dialog>

   
<Divider/>


{isError ? (<Box sx={{display:'flex', justifyContent:"center", textAlign:"center" , alignItems:"center",p:10 }}>
  <Box>
    <WarningIcon/>
    <Typography>not found</Typography>
  </Box>
</Box>) : isLoading ? (<Box sx={{display:"flex" , justifyContent:"center", alignItems:"center", textAlign:"center",p:10}}>
<Box>
<CircularProgress sx={{fontSize:"58px"}} />
<Typography>loading....</Typography>
</Box>
</Box>)

 :client ? <ClintList deleteclint={deleteclien} cleintss={client?.data} updatelint={updateclint}/> :null
   }
     </Box>
    </div>
  )
}

export default Client

