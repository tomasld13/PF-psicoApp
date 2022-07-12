import React from 'react';

import { AiOutlinePhone, AiOutlineArrowRight } from 'react-icons/ai';
import {FcOnlineSupport, FcCustomerSupport} from 'react-icons/fc'

import supportImg from "./background-psico.jpg"

const MoreInfo = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Cómo funciona?</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Impulsá tu carrera como profesional con PsicoApp</h3>
              <p className='py-4 text-3xl text-slate-300'>Nosotros te brindamos todas las herramientas para que consigas una cartera abultada de clientes. Vos decidís cuánto cobrar y cuánto trabajar.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <AiOutlinePhone className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Clientes</h3>
                      <p className='text-gray-600 text-xl'>Con más de 3000 pacientes mensuales, hay oportunidades de sobra para usted! Te brindamos las siguientes herramientas:
                       mensajería privada con el paciente, calendario para agendar los turnos y tu disponibilidad horaria, posibilidad de tener un perfil online. </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Comienza ya!<AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FcCustomerSupport className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Soporte técnico</h3>
                      <p className='text-gray-600 text-xl'>Ante cualquier inconveniente, brindamos soporte las 24 hs. Podes contactarnos vía telefono o correo electrónico.
                      Los únicos requisitos excluyentes para comenzar es
                      la matrícula validada por el colegio de psicologos y el documento de identidad (DNI). </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contactános<AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FcOnlineSupport className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Cobros y pagos</h3>
                      <p className='text-gray-600 text-xl'>Los pagos se realizan directamente entre el cliente y la cuenta del profesional. El costo de los servicios de la página es un único pago mensual que se mantiene en un 
                      10% de la totalidad de sesiones realizadas por el profesional. Aceptamos cobros vía mercadopago, tarjeta de crédito y transferencia bancaria. </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Ver más<AiOutlineArrowRight className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default MoreInfo;