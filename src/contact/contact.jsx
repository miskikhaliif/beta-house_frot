import { Box, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { set, useForm } from 'react-hook-form';
import ContactList from './contactlist';
import CircularProgress from '@mui/material/CircularProgress';
import { GetCntact, PostCntact, PutCntact } from './contactapi';
import { isError, useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
export const Contact =() => {
    const queryclient =useQueryClient()
    const {handleSubmit , register , reset , setValue, formState:{error}} =useForm()
    const [opendalog, closedalog] =useState(false)
    const [conid ,setconid] =useState('')

   const dailog = async () =>{
        closedalog(!opendalog)
    }
   
    const {data: contact,isLoading,isError} =useQuery({
        queryKey: ['contact'],
        queryFn: async () => await GetCntact(),
        onError: () =>{
            toast.error("not saved")
          }
    })
   
    const{mutate ,isLoading:mutateLoading}=useMutation({
        mutationFn: async (data) => await PostCntact(data),
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:['client']})
            toast.success("Data Has been Saved")
        },
        onError:()=>{
        toast.error("data has not been saved !")
        }
    })

    const{mutate:updateMutate, isLoading:updateLoading}=useMutation({
        mutationFn: async (data) =>{
        return await PutCntact(conid,data)
        },
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:['client']})
            toast.success("data has been updated")
            dailog()
        },
      
        onError:(e)=>{
        
            toast.error("data has not been updated")
            console.log(e)
        }
    })
   const addconatct = async(data) =>{
    if(conid !== ''){
        try {
           updateMutate(data)
           dailog()
            reset()
        } catch (error) {
            console.log("not")
        }
    }
    else{
        try {
           mutate(data)
            console.log("saved",data)
            dailog()
            reset()
        } catch (error) {
            console.log("not")
        }
    }

  
   }

   const updatecon =async(data) =>{
    setValue("name",data.name)
    setValue("phone",data.phone)
    setValue("message",data.message)
    setconid(data._id)
    dailog()
   }
  return (
    <div>
      <Box p={4}>
      <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="#">
    Dashboard
  </Link>
 
  <Typography color="text.primary">Contact</Typography>
</Breadcrumbs>
        <Box sx={{display:"flex", justifyContent:"space-between"}} my={2}>
            <Typography>Contact List</Typography>
            <IconButton onClick={dailog}>
                <AddIcon/>
            </IconButton>
        </Box>

        <Dialog open={opendalog}
        onClose={closedalog}
        >
            <DialogTitle>Add New Contact</DialogTitle>
            <Box component={"form"} onSubmit={handleSubmit(addconatct)} >
            <DialogContent>
                <Box sx={{width:"400px"}} mt={3}>
                    <Stack spacing={1} direction={"column"}>
                    <TextField label="name" {...register("name")} variant="outlined" size="small" fullWidth/>
                   <TextField label="phone"{...register("phone")} variant="outlined" size="small" fullWidth/>
                   <TextField label="message"{...register("message")} variant="outlined" size="small" fullWidth/>  
                    </Stack>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={dailog}>Close</Button>
                <Button variant='contained' disabled={mutateLoading} sx={{bgcolor:"primary.main"}} type='submit' size='small'>
                    {conid !== '' ? "update" :"submit"}
                </Button>
            </DialogActions>
            </Box>
        </Dialog>

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
</Box>) : contact ? <ContactList contactdata={contact?.data} updateconatc={updatecon}/> :null

  }
      </Box>
    </div>
  )
}
