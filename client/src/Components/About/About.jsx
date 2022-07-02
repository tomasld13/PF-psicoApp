import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold font-mont' >Somos la web líder en el sector de la psicología y del bienestar emocional.</h2>
                <p className='text-3xl py-6 text-gray-500 font-mont'>El servicio de PsicoApp es brindado por profesionales con formación clínica, que trabajan desde diferentes enfoques psicoterapéuticos reconocidos en el ámbito de la Psicología nacional e internacional.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold font-mont text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Profesionalidad</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold font-mont text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Soporte</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold font-mont text-indigo-600'>2k</p>
                    <p className='text-gray-400 mt-2'>Pacientes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About