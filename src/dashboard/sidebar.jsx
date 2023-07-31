import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import HouseIcon from '@mui/icons-material/House';
import ImageIcon from '@mui/icons-material/Image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom'
import Client from '../clints/client';
export const Sidebar = ({darwerOpen, darwerClose}) => {
    const[selectMenu , setMenu] =useState('')
  return (
<>  
  <Drawer
open={darwerOpen}
    onClose={darwerClose}
    >
      
      <Box sx={{width:"300px"}}>

       <Box sx={{p:"4"}}>
        <Stack direction={'row'} spacing={[1]}>
        <Box>
            <AddHomeIcon sx={{height:"30px", fontSize:"50px"}}/>
        </Box>
        <Box >
            <Typography variant="h6" sx={{fontSize:"20px" }}>
                BETA HOUSE
            </Typography>
        </Box>
        </Stack>
       </Box>

{/* lists */}

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
component="nav"
>
    <ListItemButton>
        <ListItemIcon>
         <DashboardIcon/></ListItemIcon>
        <ListItemText primary="Dashboard" />
        <Link to={'dashboard'}></Link>
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <HouseIcon/></ListItemIcon>
        <ListItemText primary="Home" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <HouseSidingIcon/></ListItemIcon>
        <ListItemText primary="House" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <ImageIcon/></ListItemIcon>
        <ListItemText primary="Image" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <AddPhotoAlternateIcon/></ListItemIcon>
        <ListItemText primary="imageGallery" />
    </ListItemButton>

<Link to={'service'}>
    <ListItemButton>
        <ListItemIcon>
         <ManageAccountsIcon/></ListItemIcon>
        <ListItemText primary="Service" />
    </ListItemButton>
    </Link>

    <Link to={'client'}>
    <ListItemButton>
        <ListItemIcon>
         <GroupIcon/></ListItemIcon>
        <ListItemText primary="OurClinet" />
    </ListItemButton>
    </Link>

    <ListItemButton>
        <ListItemIcon>
         <InfoIcon/></ListItemIcon>
        <ListItemText primary="About" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <ConnectWithoutContactIcon/></ListItemIcon>
        <ListItemText primary="Contact" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
         <AccountCircleIcon/></ListItemIcon>
        <ListItemText primary="User" />
    </ListItemButton>
    


</List>

      </Box>
      </Drawer>


      <Box sx={{width:"300px",display:{
        xs:"none",
        md:"block"
      }}} 
      
      >
       <Box sx={{p:"4" ,boxShadow :2}}>
        <Stack direction={'row'} spacing={[1]}>
        <Box>
            <AddHomeIcon sx={{height:"30px", fontSize:"20px"}}/>
        </Box>
        <Box >
            <Typography variant="h6"  sx={{fontSize:"20px" }}>
                BETA HOUSE
            </Typography>
        </Box>
        </Stack>
       </Box>

{/* lists */}

<Box>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
component="nav"
>
   
    <ListItemButton>
        <ListItemIcon>
         <DashboardIcon/></ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItemButton>


    <Link to={'home'}>
    <ListItemButton  onClick={()=>setMenu('Home')}  sx={[ selectMenu==='Home' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}>

        <ListItemIcon >
         <HouseIcon sx={[selectMenu === 'Home'  && {color:"white"}]}/></ListItemIcon>
        <ListItemText primary="Home" />
    </ListItemButton>
    </Link>


    <ListItemButton sx={[selectMenu ==='House' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
      onClick={()=>setMenu('House')} >
        <ListItemIcon>
         <HouseSidingIcon sx={[selectMenu === 'House' && {bgcolor:"primary.main"}]}/></ListItemIcon>
        <ListItemText primary="House" />
    </ListItemButton>

    <ListItemButton sx={[selectMenu ==='Image' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('Image')} >
        <ListItemIcon>
         <ImageIcon sx={[selectMenu == 'Image' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="Image" />
    </ListItemButton>

    <ListItemButton sx={[selectMenu ==='imageGallery' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('imageGallery')} >
        <ListItemIcon>
         <AddPhotoAlternateIcon sx={[selectMenu == 'imageGallery' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="imageGallery" />
    </ListItemButton>

<Link to={'service'} style={{textDecoration:"none", color:"black"}}>
    <ListItemButton  
    sx={[selectMenu ==='Service' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('Service')} >
        <ListItemIcon>
         <ManageAccountsIcon sx={[selectMenu == 'Service' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="Service" />
    </ListItemButton>
    </Link>

    <Link to={'client'} style={{textDecoration:"none", color:"black"}} >
    <ListItemButton sx={[selectMenu ==='OurClinet' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('OurClinet')} >
        <ListItemIcon>
         <GroupIcon sx={[selectMenu == 'OurClinet' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="OurClinet" />
    </ListItemButton>
    </Link>

<Link to={'about'} style={{textDecoration:"none", color:"black"}}>
    <ListItemButton sx={[selectMenu ==='About' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('About')} >
        <ListItemIcon>
         <InfoIcon sx={[selectMenu == 'About' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="About" />
    </ListItemButton>
    </Link>

    <Link to={'contact'} style={{textDecoration:"none", color:"black"}}>
    <ListItemButton sx={[selectMenu ==='Contact' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('Contact')} >
        <ListItemIcon>
         <ConnectWithoutContactIcon sx={[selectMenu == 'Contact' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="Contact" />
    </ListItemButton>
    </Link>

    <ListItemButton sx={[selectMenu ==='User' && {bgcolor:"primary.main",color:"white",":hover":{bgcolor:"primary.dark"}}]}
    onClick={()=>setMenu('User')} >
        <ListItemIcon>
         <AccountCircleIcon sx={[selectMenu == 'User' && {colors:"white"}]}/></ListItemIcon>
        <ListItemText primary="User" />
    </ListItemButton>


</List>

      </Box>
      </Box>
    </>
  )
}

export default Sidebar
