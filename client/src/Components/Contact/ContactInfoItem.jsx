import React from 'react'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components'


const ItemStyles = styled.div`
  padding: 2rem;
  background-color: #575989;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .contact-icon {
    color: white;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;


function ContactInfoItem({
    icon = <MdPlace size='2rem' />,
    text = 'this is an info',
}) {
  return (
    <ItemStyles>
        <div className="contact-icon">{icon}</div>
            <div className="contact-info">
            <p>{text}</p>
        </div>
    </ItemStyles>
  )
}

export default ContactInfoItem