import  React ,{useState} from 'react';
import Button from '@mui/material/Button';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Sidebar from './sidebar';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Client from '../clints/client';
import { Outlet } from 'react-router-dom';
import Service from '../servivce/service';
import About from '../about/about';
import { Contact } from '../contact/contact';
function Dashboard() {

  const [dopen , setdCose]= useState(false)

  const draweToggle = () =>{
    setdCose(!dopen)
  }

  return <>

   <Box>
    <Stack direction={'row'}>
     <Sidebar darwerOpen={dopen}
     darwerClose={draweToggle}
     />

     {/* contact */}
     <Box sx={{width:"100%"}}>
     <Box sx={{bgcolor:"primary.main",color:"white",display:"flex", justifyContent:{
  xs:"space-between",
  md:"end"
}}}p={2}>
  <IconButton sx={{p:"0",display:{
    xs:"block",
    md:"none"
  }}}
  onClick={draweToggle}

  >
  <DensitySmallIcon sx={{color:"white"}}/>
  </IconButton>
  <Typography>
    helllo
  </Typography>
</Box>
{/* <Client/> */}
{/* <Service/> */}
{/* <About/> */}
{/* <Contact/> */}
<Outlet/>
{/* <Contact/> */}
     </Box>

    </Stack>
   </Box>
  </>
}

export default Dashboard
