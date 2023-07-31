import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Aboutlist({aboutdata , updateabout, deleteabout}) {
   
      const columns= [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'fahfaahin', headerName: 'Faahfahin', width: 150,editable: true, },
        { field: 'fahfaahin_yar', headerName: 'Faafahin_yar', width: 150,editable: true, },

        {
          field:"Actions",
          headerName:"Actions",
          width:150,
          editable:true,
          renderCell:(params)=>{
            return<Box>
              <IconButton onClick={()=>deleteabout(params.row)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton onClick={()=>updateabout(params.row)}>
                <EditIcon/>
              </IconButton>
            </Box>
          }
        }
      ];

          const rows = aboutdata ? aboutdata : null
     

    
  return (
    <div>
       <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} 
      getRowId={(row) => row._id}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
   
      disableRowSelectionOnClick
      />
    </div>
    </div>
  )
}
