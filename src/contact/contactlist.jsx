import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ContactList({contactdata , updateconatc, deletecontact}) {
   
      const columns= [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150,editable: true, },
        { field: 'phone', headerName: 'Phone', width: 150,editable: true, },
        { field: 'message', headerName: 'Message', width: 150,editable: true, },

        {
          field:"Actions",
          headerName:"Actions",
          width:150,
          editable:true,
          renderCell:(params)=>{
            return<Box>
              <IconButton onClick={()=>deletecontact(params.row)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton onClick={()=>updateconatc(params.row)}>
                <EditIcon/>
              </IconButton>
            </Box>
          }
        }
      ];

          const rows = contactdata ? contactdata : null
     

    
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
