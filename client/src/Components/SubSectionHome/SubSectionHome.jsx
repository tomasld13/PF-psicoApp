import React from 'react'
import styled from 'styled-components'
import { MdSecurity, MdOutlineVerified  } from 'react-icons/md'
import { GiWorld } from 'react-icons/gi'
import SubSectionItem from './SubSectionItem'

const SubsectionItemStyles = styled.div`
  padding: 10rem 0 0 0;
  margin-left: 10rem;
  .subsection__allitems {
    display: flex;
    gap: 10rem; 
    margin-bottom: 2rem;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-top: -15rem;
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    .subsection__allitems {
        flex-direction: column;
        max-width: 350px;
       display: flex;
       align-items: center;
       margin-left: -2rem;
        margin-top: -5rem;
        margin-bottom: 5rem;
        gap: 5rem;
    }
  }

`;

function SubSectionHome() {
  return (
    <SubsectionItemStyles>
    <div name='about' className="subsection-container">
        <div className="subsection__allitems">
            <SubSectionItem 
            icon={<GiWorld size='2rem'/>}
            title='Sesiones cuando y donde quieras'
            desc='Realiza consultas online y cara a cara.'
            />
            <SubSectionItem 
            icon={<MdOutlineVerified size='2rem'/>}
            title='Confianza'
            desc='Trabajamos únicamente con doctores licenciados y verificados con alto grado de educación.'
            />
            <SubSectionItem 
            icon={<MdSecurity size='2rem'/>}
            title='Seguridad'
            desc='Durante el registro, no pediremos los datos de tu tarjeta.'
            />
        </div>
    </div>
    </SubsectionItemStyles>
  )
}

export default SubSectionHome