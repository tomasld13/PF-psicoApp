import React from 'react'
import '../Footer/Footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="col-1">
                <h3>Enlaces útiles</h3>
                <a href="#">Contacto</a>
                <a href="#">Psicólogos</a>
                <a href="#">Blog</a>
                <a href="#">Confidencialidad</a>
                </div>
            <div className="col-2">
                <h3>Contacto</h3>
                <p>Buenos Aires, Argentina</p>
                <p>Telefono: +54 9 11 45869745</p>
                <p>Email: email@email.com</p>
            </div>
            <div className="col-3">
                <h3>Social</h3>
                <a href='#'><i class='fa fa-facebook'></i></a>
                <a href='#'><i class='fa fa-twitter'></i></a>
                <a href='#'><i class='fa fa-linkedin'></i></a>
                <a href='#'><i class='fa fa-instagram'></i></a>
            </div>

        </div>
    )
}