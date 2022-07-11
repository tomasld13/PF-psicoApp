import React from 'react'
import background from './background-psico.jpg'

const LandingPsico = () => {
    return (
        <div className="text-white bg-darkgray">
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
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
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Mayor visibilidad dentro de nuestra red digital de salud mental.</p>
            <button className='bg-[#575989] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> <a href='/auth/login'>Comenzar ahora</a> </button>
          </div>
        </div>
      );
};

export default LandingPsico;