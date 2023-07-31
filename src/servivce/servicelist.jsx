import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Servicelist({servicedata, updatedata, deletedata}){
   
      const columns= [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'title', headerName: 'Title', width: 150,editable: true, },
        { field: 'description', headerName: 'Description', width: 150,editable: true, },
        { field: 'icon', headerName: 'Icon', width: 150,editable: true, },

        {
          field:"Actions",
          headerName:"Actions",
          width:150,
          editable:true,
          renderCell:(params)=>{
            return<Box>
              <IconButton onClick={()=>deletedata(params.row)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton onClick={()=>updatedata(params.row)}>
                <EditIcon/>
              </IconButton>
            </Box>
          }
        }
      ];

          const rows = servicedata ? servicedata : null
     

    
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
