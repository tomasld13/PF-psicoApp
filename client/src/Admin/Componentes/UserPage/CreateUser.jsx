import './CreateUser.css'
import React from 'react'
import styled from 'styled-components';
import Sidebar from '../Sidebar';

function CreateUser() {
  return (
    <> 
    <Sidebar />
    <Container>
        <Formulario>
            <Items>
                <label>Nombre</label>
                <input type="text" placeholder='nombre'/>
            </Items>
            <Items>
                <label>Apellido</label>
                <input type="text" placeholder='Apellido'/>
            </Items>
            <Items>
                <label>Email</label>
                <input type="email" placeholder='Email'/>
            </Items>
             <Items>
                <label>Contraseña</label>
                <input type="password" placeholder='Contraseña'/>
            </Items>
            <Items>
                <label>Telefono</label>
                <input type="text" placeholder='Telefono'/>
            </Items>
            <Items>
                <label>Dirección</label>
                <input type="text" placeholder='Dirección'/>
            </Items>
              <Items>
                <label>Género</label>
                <div className="addUserGender"> 
                    <input type="radio" name='Género' id='Hombre' value='Hombre'/>
                    <label For="Hombre">Hombre</label>
                    <input type="radio" name='Género' id='Mujer' value='Mujer'/>
                    <label For="Mujer">Mujer</label>
                    </div>
            </Items>
            <Button className="addUserButton">Crear Paciente</Button>
        </Formulario>
    </Container>
    </>
  )
}

const Container = styled.div`
    flex: 4;
    width: 60%;
    display: flex;
    justify-content: center;
    margin-top: -30rem;
    margin-left: 25rem;
    @media screen and (min-width: 320px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-left: 5rem;
    width: 100%;
  }
`;

const Formulario = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Items = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 200px;
    background-color: #575989;
    border: none;
    color: white;  
`;


export default CreateUser;