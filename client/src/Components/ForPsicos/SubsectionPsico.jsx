import React from 'react'
import benefit from './benefit.png'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function SubsectionPsico() {
    return (
        <div className='w-full bg-darkgray py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={benefit} alt='/' />
            <div className='flex flex-col justify-center'>
              <p className='text-[#fff] font-bold '>TE DAMOS LA BIENVENIDA!</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Encuentra y maneja a tus clientes de una forma sencilla</h1>
              <p className='text-white'>
                Podes comenzar hoy mismo a trabajar de forma rápida. A medida que vayas realizando sesiones vas a ir aumentando tu 
                calificación y eso hará que seas mas reconocido. 
                Como bienvenida, te enviaremos unos regalos por confiar en nosotros.
              </p>       
              <Link to='support'
              smooth={true}
              offset={20} 
              duration={700}
              >
              <button className='bg-primary text-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Más Información</button>
              </Link>
     
            </div>
          </div>
        </div>
      );
    };
