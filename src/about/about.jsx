import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { useForm } from 'react-hook-form';
import { Getabouts, Postabouts, Putabouts } from './aboutapi';
import Aboutlist from './aboutlist';
function About() {

    const{handleSubmit , register,reset,setValue , formState:{error}} =useForm()
    const[opendailog, closedailog] =useState()
    const [aboutid,setabutid] =useState('')
    const dailog = async() =>{
        closedailog(!opendailog)
    }
    const [about,setabout] =useState([])

    useEffect(() =>{
        const getallabout = async() =>{
            const{data} =await Getabouts()
            setabout(data)
        }
        getallabout()
    })

    const addAbout = async(data) =>{
        if(aboutid !== ''){
            try {
                await Putabouts(aboutid,data)
                dailog()
                reset()
                console.log("updated")
            } catch (error) {
                console.log("not")
                
            }
        }
        else{
            try{
            await Postabouts(data)
            console.log("saved",data)
            dailog()
            reset()
            }
            catch(error){
                console.log("not")
            }
        }
    }

    const updateabout = async(data) =>{
        setValue("fahfaahin",data.fahfaahin)
        setValue("fahfaahin_yar",data.fahfaahin_yar)
        setabutid(data._id)
        dailog()
    }
  return (
    <div>
      <Box p={4}>

        <Box sx={{display:"flex" ,justifyContent:"space-between"}} my={2}>
            <Typography>About List</Typography>
            <IconButton onClick={dailog}>
                <InfoIcon/>
            </IconButton>

        </Box>

<Dialog open={opendailog}
onClose={closedailog}> 
    <DialogTitle>Add New About</DialogTitle>
    <Box component={"form"} onSubmit={handleSubmit(addAbout)}>
    <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>
            <Stack spacing={2} direction={'column'}>
    <TextField label="fahfaahin_yar" {...register("fahfaahin_yar")} variant="outlined" size="small" fullWidth/>
     <TextField label="fahfaahin"{...register("fahfaahin")} variant="outlined" size="small" fullWidth/>
            </Stack>
        </Box>
    </DialogContent>

    <DialogActions>
        <Button onClick={dailog}>Close</Button>
        <Button variant='contained' type='submit' size='small'>
            {aboutid !== '' ? "update" : "submit"}
        </Button>

    </DialogActions>
    </Box>
</Dialog>

{
    about ? <Aboutlist  aboutdata={about} updateabout={updateabout}/> :null
}
      </Box>
    </div>
  )
}

export default About
