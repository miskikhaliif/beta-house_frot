import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Getclients } from './clientapi';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ClintList({cleintss , updatelint, deleteclint}) {
   
      const columns= [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'ClientName', width: 150,editable: true, },
        { field: 'clientlogo', headerName: 'ClientLogo', width: 150,editable: true, },

        {
          field:"Actions",
          headerName:"Actions",
          width:150,
          editable:true,
          renderCell:(params)=>{
            return<Box>
              <IconButton onClick={()=>deleteclint(params.row)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton onClick={()=>updatelint(params.row)}>
                <EditIcon/>
              </IconButton>
            </Box>
          }
        }
      ];

          const rows = cleintss ? cleintss : null
     

    
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
