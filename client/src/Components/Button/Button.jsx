import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0] // si no tiene estilo por default aplica btn--primary

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0] // si no tiene un tamaño, simplemente asigno el primero del arreglo.

    return (
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            > 
                {children}
            </button>
        </Link>
    )
}