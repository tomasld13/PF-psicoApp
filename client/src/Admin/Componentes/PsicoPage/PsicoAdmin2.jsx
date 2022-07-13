import './Psico.css'
import imageavatar from '../../Assets/face1.jpg';
import styled from 'styled-components'

import React from 'react'
import { MdLocationSearching, MdMailOutline, MdOutlineSystemSecurityUpdate, MdPermIdentity } from 'react-icons/md';
import Sidebar from '../Sidebar';

export default function PsicoAdmin2() {
  return (
    <>
      <Sidebar />
    <Container >
        <UserTitle>
          <h1>Editar Paciente</h1>
        </UserTitle>
        <UserContainer>
          <UserShow>
            <UserShowTitle>
              <ShowUsername>Nombre del paciente</ShowUsername>
              <ShowTitle>Algun título</ShowTitle>
            </UserShowTitle>
            <UserShowBottom>
              <TitleButtom>
                Detalles de la cuenta
                <UserShowInfo>
                <MdPermIdentity className='user-show-icon'/>
                <span className="user-show-input-title">Nombre Completo</span>
                </UserShowInfo>
                <div className="user-show-info">
                <MdLocationSearching className='user-show-icon'/>
                <span className="user-show-input-title">Dirección</span>
                </div>
                <div className="user-show-info">
                <MdMailOutline className='user-show-icon'/>
                <span className="user-show-input-title">Email</span>
                </div>
                <div className="user-show-info">
                <MdOutlineSystemSecurityUpdate className='user-show-icon'/>
                <span className="user-show-input-title">Status</span>
                </div>
              </TitleButtom>
            </UserShowBottom>
          </UserShow>
          <UserUpdate>
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
          </UserUpdate>
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