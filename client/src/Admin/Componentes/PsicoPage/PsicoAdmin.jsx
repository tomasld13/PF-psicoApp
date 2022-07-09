import './Psico.css'
import imageavatar from '../../Assets/face1.jpg';
import styled from 'styled-components';


import React from 'react'
import { MdLocationSearching, MdMailOutline, MdOutlineSystemSecurityUpdate, MdPermIdentity } from 'react-icons/md';
import Sidebar from '../Sidebar';

export default function PsicoAdmin() {
  return (
    <>
    <Sidebar />
    <Container>
        <TitleContainer>
          <h1>Editar Psicólogo</h1>
          <Button><a href='/psicologos/crear'>Agregar Nuevo </a> </Button>
        </TitleContainer>
        <UserContainer className="user-container">
          <div className="user-show">
            <div className="user-show-title">
              <span className="show-username">Nombre del Psicologo</span>
              <span className="show-title">Especialidad</span>
            </div>
            <div className="user-show-bottom">
              <span className="user-show-tittle-bottom">
                Detalles de la cuenta
                <div className="user-show-info">
                <MdPermIdentity className='user-show-icon'/>
                <span className="user-show-input-title">Nombre Completo</span>
                </div>
                <div className="user-show-info">
                <MdLocationSearching className='user-show-icon'/>
                <span className="user-show-input-title">Matrícula</span>
                </div>
                <div className="user-show-info">
                <MdLocationSearching className='user-show-icon'/>
                <span className="user-show-input-title">DNI</span>
                </div>
                <div className="user-show-info">
                <MdMailOutline className='user-show-icon'/>
                <span className="user-show-input-title">Email</span>
                </div>
                <div className="user-show-info">
                <MdMailOutline className='user-show-icon'/>
                <span className="user-show-input-title">CBU</span>
                </div>
                <div className="user-show-info">
                <MdOutlineSystemSecurityUpdate className='user-show-icon'/>
                <span className="user-show-input-title">Status</span>
                </div>
              </span>

            </div>
          </div>
          <div className="user-update">
            <span className="userUpdateTitle">Editar</span>
            <Form>
              <FormLeft>
                <Update className="userUpdateItem">
                  <label>Nombre completo</label>
                  <Input 
                  type="text" 
                  placeholder='nombrecompleto'
                  
                  />
                </Update>
                <Update>
                  <label>Email</label>
                  <Input 
                  type="text" 
                  placeholder='nombrecompleto'
                  
                  />
                  </Update>
                <Update>
                  <label>Matrícula</label>
                  <Input 
                  type="text" 
                  placeholder='nombrecompleto'
                  
                  />
                </Update>
                <Update>
                  <label>DNI</label>
                  <Input 
                  type="text" 
                  placeholder='Documento de Identidad'
                  
                  />
                </Update>
                <Update>
                  <label>CBU</label>
                  <Input 
                  type="text" 
                  placeholder='CBU'
                  
                  />
                </Update>
                <Update>
                  <label>Contraseña</label>
                  <Input 
                  type="text" 
                  placeholder='nombrecompleto'
                  
                  />
                </Update>
                <Update>
                  <label>Status</label>
                  <Select
                  >
                    <option>Activo</option>
                    <option>Deshabilitado</option>
                    <option>Suspendido</option>
                  </Select>
                </Update>
              </FormLeft>
              <div className="formRightInfo">
                <div className="userupdate-upload">
                  <img 
                  src={imageavatar} 
                  alt="imagen de perfil admin" />
                </div>
                <Button className="userUpdateButton">Actualizar</Button>
              </div>
            </Form>
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
      margin: 0 0 0 0;
      flex-direction: column;
      width: 100%;
  }
`;

const Button = styled.button` 
    width: 100px;
    border: none;
    padding: 5px;
    background-color: #575989;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      margin-top: 20px;
      width: 100%;
      align-items: center;
      margin-left: 0.8rem;
  }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      margin: 0 0 2rem;
      flex-direction: column;
      width: 100%;
  }
`;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-items: center;
      margin-top: 2rem;
      gap: 3rem;
      width: 100%;
      align-items: center;
  }
`;

const FormLeft = styled.div`
  @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-self: center;
      margin-top: 2rem;
      width: 100%;
      align-items: center;
  }
`;

const Update = styled.div`
    display: flex;
    font-display: column;
    margin-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 960px) {
      display: flex;
      margin: 0 0 2rem;
      flex-direction: column;
      width: 100%;
  }
`;

const Input = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid #575989;
    margin-left: 2rem;

`;

const Select = styled.select`
  margin-left: 2rem;

`;