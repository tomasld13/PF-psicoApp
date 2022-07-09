import * as React from 'react';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { UserRows } from './data'
import './UserList.css'
import Sidebar from '../Sidebar';


export default function UserList() {

  const [data, setData] = useState(UserRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !==id))
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
  },
  {
    field: 'fullName',
    headerName: 'Nombre Completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }, 
  {
    field: 'action',
    headerName: 'Acciones',
    width: 150,
    renderCell: (params) => {
      return (
        <> 
        
        <Link to={'/usuario/'+params.row.id}>
        <button className="userListEdit">Editar</button>
        </Link>
        <AiOutlineDelete 
        size='25' 
        className='userListDelete'
        onClick={() => handleDelete(params.row.id)}
        />
        </>
      )
    }
  }
];

  return (
    <> 
    <Sidebar />
    <div style={{ height: 660, width: '57%', marginInlineStart: 500, marginTop: -650,  }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
