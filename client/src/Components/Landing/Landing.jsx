import React from 'react'
import './Landing.css'
import img from './landing-image.png'


function Landing() {
  return (
    <div className='main'>
      <div className="main-container">
      <div className="main-content">
            <h1>Inicia una sesión con un psicólogo licenciado</h1>
            <p>Comienza online o cara a cara con uno 
            de nuestros especialistas licenciados</p>
            <button className='main-btn'><a href="#">Buscar psicólogo</a></button>
        </div>
       <div className="main-img-container">
          <img src={img} alt='Imagen no encontrada' id='main-img'></img>
       </div>
      </div>
    </div>
  )
}

export default Landing