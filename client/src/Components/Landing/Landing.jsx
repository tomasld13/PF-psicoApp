import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <div className='content'>
        <div className="text-header">
        <h1>Inicia una sesión con un psicólogo licenciado</h1>
        <h2>Comienza online o cara a cara con uno de nuestros especialistas licenciados</h2>
        <button><a href="#">Buscar psicólogo</a></button>
        </div>
       <div className="img-header">
        <img src='./img/landing-image.png'></img>
       </div>
    </div>
  )
}

export default Landing