import React, { useState } from 'react'
import { Button } from '../Button/Button'
import styled from 'styled-components'

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 80%;
    height: 80%;
    font-size: 1.2rem;
    padding: 1.2rem;
    color: #212329;
    background-color: #f0efff;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
`;

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
  <>
    <FormStyle>
            <div className="form-group">
                <label 
                htmlFor="name"> Tu nombre
                    <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    value={name}  
                    onChange={e => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label
                 htmlFor="email"> Tu correo
                    <input
                    type="text" 
                    id='email' 
                    email='email'
                     value={email}  
                    onChange={e => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label 
                htmlFor="message"> Tu mensaje
                    <textarea
                    type="text"
                    id='message' 
                    name='message' 
                    value={message}  
                    onChange={e => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <Button type='submit'>Enviar</Button>
    </FormStyle>
  </>
  )
}

export default ContactForm