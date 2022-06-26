<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> frontend
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Link, Route } from 'react-router-dom';
import './Nav.css';
import { startLogout } from '../../slice/auth/thunks';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const {displayName, status} = useSelector(state => state.auth);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

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
          {
            status === 'authenticated' ? <h3>Hola {displayName}</h3> : null
          }
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
                to='/auth/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registrarse
              </Link>
            </li>
          </ul>
          {
            status === 'authenticated'
            ? button && <Button buttonStyle='btn--outline' onClick={onLogout}>Logout</Button>
            : button && <Link to='/auth/login'>
              {/* <Button buttonStyle='btn--outline'>Login</Button> */}
              <Button buttonStyle='btn--outline' link='/auth/login'>Ingresar</Button>
            </Link> 
          }
        </div>
      </nav>
    </>
  );
}

<<<<<<< HEAD
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
=======
export default Nav;
>>>>>>> frontend
