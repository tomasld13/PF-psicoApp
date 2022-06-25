<<<<<<< HEAD
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PSICOAPP
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Para Psicólogos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registrarse
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Registrarse</Button>}
        </div>
      </nav>
    </>
  );
}

export default Nav;
=======
import React from 'react'
import style from './nav.module.css'

export default function Nav() {
  return (
    <div className={style.content}>
      <>
        <h2>PsicoApp</h2>
      </>
      
      <>      
        <ul>
          <li>Sobre nostros</li>
          <li>For Psychologists</li>
          <li>For Business</li>
          <li>Blog</li>
        </ul>
      </>

      <>
        <button>Registrar</button>
        <button>Iniciar sesión</button>
      </>
    </div>
  )
}
>>>>>>> 28f3463a3af476dae47b0ad29834f1acd38307d9
