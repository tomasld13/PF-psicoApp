import React from 'react'
import { useSelector } from 'react-redux'
import profileimg from './profile-image-example.png'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import './Profile.css'

function Profile() {

    const storeAuthBack = useSelector(state => state.auth.authBack);

  return (
    <div className='profile' id='profile'>
            <div className='profile-container'>
                <img src={profileimg} alt='profileimg' className='profile-img' />
                <div className='column-2'>
                    <h2>{storeAuthBack.name}</h2>
                    <Link to='/'>
                    <button>Editar Perfil</button>
                    </Link>
                    <span className='line'></span>
                    <p>Email: usuario@gmail.com</p>
                    <p>Ciudad: Buenos Aires</p>
                    <p>Dirección: av.Boedo 1293</p>
                    <Button className='button'>Tus sesiones</Button>
                    <Button className='button'>Tus psicologos favoritos</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile