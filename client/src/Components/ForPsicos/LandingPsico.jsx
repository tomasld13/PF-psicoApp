import React from 'react'
import background from './background2.jpg'
import styled from 'styled-components'

const LandingPsico = () => {
    return (
        <div className="text-white">
          <img src={background} alt='' className=' w-full h-full object-cover mix-blend-overlay absolute  -z-10 brightness-500 blur-md' />
          <div className='max-w-[800px] max-h-[1000px]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#575989] font-bold p-2'>
              LOGRA EL CRECIMIENTO QUE QUERES CON NOSOTROS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              PSICOAPP
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                Autogestión y posicionamiento de tu consultorio online
              </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 text-white'>Mayor visibilidad dentro de nuestra red digital de salud mental.</p>
            <button className='bg-[#575989] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'> <a href='/auth/login'>Comenzar ahora</a> </button>
          </div>
        </div>
      );
};

export default LandingPsico;


// const Imagen = styled.img` 

// @media screen and (max-width: 960px) {
//   height: 35rem;
// }
// `;