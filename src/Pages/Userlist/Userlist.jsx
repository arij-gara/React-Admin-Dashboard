import React from 'react'
import './Userlist.css'
import{userrows} from '../../../src/Components/dummydata'
import {DeleteOutline} from '@mui/icons-material'
import{useState} from'react'
import {Link} from 'react-router-dom'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export default function Userlist() {

    const [data, setdata]= useState(userrows);
    const handeldelete =(id) =>{
      setdata(data.filter(( item)=> item.id !==id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: ' username', width: 160 , renderCell: (params) =>{
          return(
            <div className='userlistuser'>
              <img  className='userlistimg' src={params.row.avatar} alt=''/>
              {params.row.username}
            </div>
          )

        } 

        
       },
        { field: 'email', headerName: 'email', width: 160 },
        
        {
          field: 'status',
          headerName: 'status',
         
          width: 90,
        },

        {
          field: 'transaction',
          headerName: 'transaction',
         
          width: 120,
        },
        {
          field: 'action',
          headerName: 'action',
         
          width: 150,
          renderCell : (params) =>{
            return (
              <>
              <Link to={'/user/'+params.row.id}>
              <button className='userlistedit'>edit </button>
              </Link>
              <DeleteOutline className='userlistdelete'
              onClick={ ()=> handeldelete(params.row.id)}
              />
              </>
            )
          }
        },
      ];
      
     
  return (
    <div className='userlist'>
        <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
