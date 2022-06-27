import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Link, Route } from 'react-router-dom';
import './Nav.css';
import { startLogout } from '../../slice/auth/thunks';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const {displayName, status} = useSelector(state => state.auth.authFirebase);
  const storeAuthBack = useSelector(state => state.auth.authBack);
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
            status === 'authenticated' || storeAuthBack.status === 'authenticated' ? <h3>Hola {!displayName ? storeAuthBack.name : displayName}</h3> : null
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
                to='/contacto'
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
            status === 'authenticated' || storeAuthBack.status === 'authenticated'
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

export default Nav;