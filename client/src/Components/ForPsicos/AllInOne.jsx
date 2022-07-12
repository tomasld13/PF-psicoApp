import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Plataforma All-In-One </h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Te ofrecemos las soluciones que necesitas para tu perfil profesional.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Turnos Online</h3>
              <p className='text-lg pt-2 pb-4'>
              Organizá tus horarios para llegar 
              a tus pacientes en todo momento de manera presencial o virtual.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Videoconsultas</h3>
              <p className='text-lg pt-2 pb-4'>
              Servicio integrado de videoconsultas para atender a tus pacientes estén donde estén.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Sitio Web</h3>
              <p className='text-lg pt-2 pb-4'>
              Creá y usá tu perfil profesional como página web con toda la información 
              para llegar a tus pacientes y aumentar tu alcance.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Cobros sin intermediarios</h3>
              <p className='text-lg pt-2 pb-4'>
              No necesitas intermediarios para cobrar a tus pacientes, solo te cobramos la membresia mensual.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Recibe feedbacks de tus pacientes</h3>
              <p className='text-lg pt-2 pb-4'>
              Recibí feedbacks de tus pacientes para que puedas mejorar tu perfil profesional.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Sin descargas</h3>
              <p className='text-lg pt-2 pb-4'>
              Accedé a tu perfil profesional donde y cuando quieras.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Prefacturación</h3>
              <p className='text-lg pt-2 pb-4'>
              Ahorrá tiempo y recursos con nuestros convenios.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AiOutlineCheckCircle className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Chat en vivo</h3>
              <p className='text-lg pt-2 pb-4'>
                Podes comunicarte con tu cliente en la misma plataforma!
                De manera que se pueda simplicar el proceso de acordar un turno.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;