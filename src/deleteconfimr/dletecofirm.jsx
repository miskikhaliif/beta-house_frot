import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
export default function Dletecofirm({message, dailogclose, daologopen,confirm}) {
  return (
    <div>
      <Box>
        <Dialog open={daologopen}
        onClose={dailogclose}
        >
            <DialogTitle>Delete confirmation</DialogTitle>
            <Box>
                <DialogContent>
                    <Box sx={{width:"300px" , display:"flex", justifyContent:"center", alignItems:"center" , textAlign:"center"}}>
                        <Stack spacing={1} direction={'column'}>
                            <QuestionMarkIcon sx={{fontSize:"40px", bgcolor:'primary.main', color:"white", borderRadius:"100%",
                        alignItems:"center", alignSelf:"center",p:2
                        }}/>

                        <Typography>are sure to Delete</Typography>
                        <Typography>{message}</Typography>
                        </Stack>
                    </Box>
                </DialogContent>
                <DialogActions>
                <Button onClick={dailogclose}>Cancel</Button>
          <Button variant="contained" onClick={confirm}  sx={{bgcolor:"primary.main"}}   size="small">

              Yes
              </Button>
                </DialogActions>
            </Box>

        </Dialog>
      </Box>
    </div>
  )
}
