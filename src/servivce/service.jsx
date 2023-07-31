import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Getserevice, Postserevice,Updateserver } from './serviceapi';
import Servicelist from './servicelist';
import { useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from 'react-query';
export const Service =() => {
    const queryclient = useQueryClient()
   const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
    const [dailog , setdailog]=useState(false)
    const [servceid,setservcieid]=useState('')
    const toggledailog = async () =>{
        setdailog(!dailog)
    }

    const {data:service}=useQuery({
        queryKey:['service'],
        queryFn: async () => await Postserevice()
        
    })


    const addservices = async(data) =>{
        if(servceid !=='')
        {
            try {
                await Updateserver(servceid,data)
                    console.log("updated")
                    toggledailog()
                    reset()
                
            } catch (error) {
                console.log("not updated")
            }
    
        }
        
        else{
            try {
                await Postserevice(data)
                console.log("seved",data)
                toggledailog()
                reset()
            } catch (error) {
console.log("not")
            }
        }
       
      

    }
    const updateserver = async(data) =>{
        setValue("title",data.title)
        setValue("description",data.description)
        setValue("icon",data.icon)
        setservcieid(data._id)
        toggledailog()
    }
  return (

    <div>
   <Box p={4}>
    <Box sx={{display:"flex" , justifyContent:"space-between"}} my={4}>
    <Typography>Service List</Typography>
    <IconButton onClick={toggledailog}>
        <ManageAccountsIcon/>
    </IconButton>
    </Box>

    <Dialog open={dailog}
    onClose={toggledailog}
    >
        <DialogTitle>Add Service</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(addservices)}>
        <DialogContent>
            <Box sx={{width:"450px"}} mt={3}>
                <Stack spacing={2} direction={'column'}>
                <TextField label="Title"{...register("title")} variant="outlined" size="small" fullWidth/>
                 <TextField label="Description"{...register("description")} variant="outlined" size="small" fullWidth/>
                 <TextField label="Icon"{...register("icon")} variant="outlined" size="small" fullWidth/>
                </Stack>
            </Box>

        </DialogContent>

        <DialogActions>
            <Button onClick={toggledailog}>Close</Button>
            <Button variant='contained' type='submit' size='small'>
                {servceid !== ''? "update" : "submit"}
            </Button>
        </DialogActions>
        </Box>
    </Dialog>

{
    service ? <Servicelist servicedata={service?.data}  updatedata={updateserver}/> :null
}
    
</Box>
    </div>
  )
}

export default Service
