import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './UserList.css'
import Sidebar from '../Sidebar';
import {getPatient, deleteUser} from '../../../slice/psico/thunks.js';

export default function UserList() {

  const pacientes = useSelector(state => state.psicology.patients);
  const {token} = useSelector(state => state.auth.authBack);
  const paciente = useSelector(state => state.psicology.pacientId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estas seguro que querés eliminar al usuario?',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {

      if(result.isConfirmed) {
        Swal.fire('El usuario fue eliminado correctamente', "", 'success')
        dispatch(deleteUser(id, 'paciente', token))
        setTimeout(() => {
       dispatch(getPatient());
     },50);
        navigate('/pacientes')
      } else if (result.isDenied) {
        Swal.fire('Los datos no se han guardado.','', 'info')
      }
    })
  }


  useEffect(() => {
    dispatch(getPatient());
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
        
        <Link to={'/pacientes/'+params.row.id}>
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
    <div style={{ height: 660, width: '65%', marginInlineStart: 400, marginTop: -650 }}>
      <DataGrid
        rows={pacientes}
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