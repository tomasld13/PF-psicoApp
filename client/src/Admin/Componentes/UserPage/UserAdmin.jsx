import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './User.css';
import imageavatar from '../../Assets/face1.jpg';
import styled from 'styled-components'
import { MdLocationSearching, MdMailOutline, MdOutlineSystemSecurityUpdate, MdPermIdentity } from 'react-icons/md';
import Sidebar from '../Sidebar';
import { getPacientID } from '../../../slice/psico/thunks.js';
import Loading from '../../../Components/Loading/Loading';

export default function UserAdmin() {

  const paciente = useSelector(state => state.psicology.pacientId);

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPacientID(id));
  }, []);
  

  console.log(paciente);
  return (
    <>
    <Sidebar />
    <Container className='user-admin-profile'>
        <div className="user-title-container">
          <h1 className="edit-user">Editar Paciente</h1>
          <button className="userAddButton">Crear Nuevo</button>
        </div>
        <UserContainer className="user-container">
          <div className="user-show">
            <div className="user-show-title">
              <span className="show-username">Nombre del paciente</span>
              <span className="show-title">Algun título</span>
            </div>
            <div className="user-show-bottom">
              {
                paciente.usuario ? <>  
                  <span className="user-show-tittle-bottom">
                    Detalles de la cuenta
                    <div className="user-show-info">
                    <MdPermIdentity className='user-show-icon'/>
                    <span className="user-show-input-title">{`${paciente.usuario.name} ${paciente.usuario.lastname}`}</span>
                    </div>
                    <div className="user-show-info">
                    <MdLocationSearching className='user-show-icon'/>
                    <span className="user-show-input-title">{paciente.usuario.address}</span>
                    </div>
                    <div className="user-show-info">
                    <MdMailOutline className='user-show-icon'/>
                    <span className="user-show-input-title">{paciente.usuario.email}</span>
                    </div>
                    <div className="user-show-info">
                    <MdOutlineSystemSecurityUpdate className='user-show-icon'/>
                    <span className="user-show-input-title">{paciente.usuario.state ? 'activo' : 'inactivo'}</span>
                    </div>
                  </span>
                </> : <>
                  <Loading />
                </>
              }
            </div>
          </div>
          <div className="user-update">
            <span className="userUpdateTitle">Editar</span>
            <form  className="userUpdateForm">
              <div className="form-left-info">
                <div className="userUpdateItem">
                  <label>Status</label>
                  <select
                  className='userUpdateInputs'>
                    <option>Activo</option>
                    <option>Deshabilitado</option>
                    <option>Suspendido</option>
                  </select>
                </div>
              </div>
              <div className="formRightInfo">
                <button className="userUpdateButton">Actualizar</button>
              </div>
            </form>
          </div>
        </UserContainer>
    </Container>
  </>
  )
}

const Container = styled.div`
    flex: 4;
    padding: 20px;
    /* margin-left: 50rem; */
    width: 73%;
    margin-left: 25rem;
    margin-top: -35rem;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: 10rem;
    }

`
const UserTitle = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat';
`; 

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;

`;

const UserShow = styled.div` 
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0.75 ) ;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserShowTitle = styled.div` 
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const UserUpdate = styled.div` 
    flex: 2;
    padding: 20px;
    margin-left: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0.75 ) ;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ShowUsername = styled.span`
    font-weight: 600;
    font-family: 'Montserrat';
`

const ShowTitle = styled.span`
  font-weight: 300;
  font-family: 'Montserrat';
`

const UserShowBottom = styled.div`
   margin-top: 20px;
`;

const TitleButtom = styled.span`
     font-size: 14px;
    font-weight: 600;
    color: #575989;
    font-family: 'Montserrat';
`

const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: lightgray;
    font-family: 'Montserrat';
`