import React from 'react'
import { GiWorld } from 'react-icons/gi'
import styled from 'styled-components'

const ItemStyles = styled.div`
  text-align: center ;
  .subsectionItem_icon {
    svg {
        width: 21rem;
    }
  } 
    .subsectionItem_title {
        font-size: 1.5rem;
        color: black;
        font-family: 'Tenor-sans';
        margin-bottom: -2rem;
    }
    .para {
        margin-top: 2rem;
        color: gray;
    }
`;

function SubSectionItem({
    icon = <GiWorld />,
    title = 'Sesiones cuando y donde quieras',
    desc = 'Realiza consultas online y cara a cara'
}) {
  return (
    <ItemStyles className='subsectionItem'>
        <div className="subsectionItem_icon">{icon}</div>
        <div className="subsectionItem_title">{title}</div>
        <p className='para'>{desc}</p>
    </ItemStyles>
  )
}

export default SubSectionItem