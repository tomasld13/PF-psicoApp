import './User.css'
import imageavatar from '../../Assets/face1.jpg';


import React from 'react'
import { MdLocationSearching, MdMailOutline, MdOutlineSystemSecurityUpdate, MdPermIdentity } from 'react-icons/md';
import Sidebar from '../Sidebar';

export default function UserAdmin() {
  return (
    <>
    <Sidebar />
    <div className='user-admin-profile'>
        <div className="user-title-container">
          <h1 className="edit-user">Editar Paciente</h1>
          <button className="userAddButton"><a href='/pacientes/crear'>Crear Nuevo</a></button>
        </div>
        <div className="user-container">
          <div className="user-show">
            <div className="user-show-title">
              <span className="show-username">Nombre del paciente</span>
              <span className="show-title">Algun título</span>
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
              </span>

            </div>
          </div>
          <div className="user-update">
            <span className="userUpdateTitle">Editar</span>
            <form  className="userUpdateForm">
              <div className="form-left-info">
                <div className="userUpdateItem">
                  <label>Nombre completo</label>
                  <input 
                  type="text" 
                  placeholder='nombrecompleto'
                  className='userUpdateInputs'
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input 
                  type="text" 
                  placeholder='nombrecompleto'
                  className='userUpdateInputs'
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Contraseña</label>
                  <input 
                  type="text" 
                  placeholder='nombrecompleto'
                  className='userUpdateInputs'
                  />
                </div>
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
                <div className="userupdate-upload">
                  <img 
                  src={imageavatar} 
                  alt="imagen de perfil admin" />
                </div>
                <button className="userUpdateButton">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  </>
  )
}