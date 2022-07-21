import React from 'react';


import DocumentationCard from './DocumentationCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { BsArrow90DegLeft } from 'react-icons/bs'
import styled from 'styled-components'

const Documentation = () => {
  return (
    <> 
    <Button><a href='/dashboard'><BsArrow90DegLeft size={50} /></a></Button>
    <div className='w-full bg-darkgray text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <SectionTitle heading='Funcionalidades del administrador' subheading=''/>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <DocumentationCard heading='PROFESIONALES' text='El administrador va a poder ver una lista completa de los psicologos que integran la plataforma, ademas va a poder ver su perfil profesional y suspender de acuerdo al caso.' />
            <DocumentationCard heading='PACIENTES' text='El administrador va a poder ver la lista completa de pacientes, junto a sus perfiles y poder eliminarlos completamente de la plataforma.' />
            <DocumentationCard heading='ESTADISTICAS' text='Se van a observar una serie de estadisticas como por ejemplo: la cantidad total de pacientes y psicologos, los ingresos totales, y una grafica mensual acerca del progreso de la aplciacion.' />
            <DocumentationCard heading='COMUNICACIÓN' text='El administrador podrá comunicarse tanto con pacientes como con profesionales.' />
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Documentation;

const Button = styled.button`
  color: white;
  font-size: 20rem;
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  margin-left: 3rem;
  margin-top: 2rem !important;
  cursor: pointer;
`;