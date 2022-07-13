import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './PsicoList.css'
import Swal from 'sweetalert2'
import Sidebar from '../Sidebar';
import { getPsicology, deleteUser, suspenderPsico } from '../../../slice/psico/thunks.js';


export default function PsicoList() {

  const psicologos = useSelector(state => state.psicology.psychologists);
  const {token} = useSelector(state => state.auth.authBack);
  

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estas seguro que querés suspender al usuario?',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {

      if(result.isConfirmed) {
        Swal.fire('El usuario fue suspendido correctamente', "", 'success')
        dispatch(suspenderPsico(id,token));
        dispatch(getPsicology());
      } else if (result.isDenied) {
        Swal.fire('Los datos no se han guardado.','', 'info')
      }
    })
  }


  useEffect(() => {
    dispatch(getPsicology());
  }, []);

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'lastname', headerName: 'Apellido', width: 130 },
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
    width: 230,
    valueGetter: (params) =>
      `${params.row.name || ''} ${params.row.lastname || ''}`,
  },
  { 
    field: 'state',
    headerName: 'Status',
    width: 120
  },
  {
    field: 'action',
    headerName: 'Acciones',
    width: 150,
    renderCell: (params) => {
      return (
        <> 
          <Link to={'/psicologos/'+params.row.psicologo.id}>
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
        rows={psicologos}
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
