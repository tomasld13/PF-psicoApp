import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Link, animateScroll as scroll } from 'react-scroll'
import './Nav.css';
import { startLogout } from '../../slice/auth/thunks';
import logoImage from './logo.png'
import Dropdown from './Dropdown';

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
          <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoImage} alt="logo image" />
          </a>
          {
            status === 'authenticated' || storeAuthBack.status === 'authenticated' 
            ? <div className='text-user'>Hola, {!displayName ? storeAuthBack.name : displayName}!</div> 
            : null
          }
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              smooth={true}
              offset={50} 
              duration={700}
              to='about' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Para Psicólogos
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contacto
              </a>
            </li>

            <li>
              <a
                href='/auth/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registrarse
              </a>
            </li>
          </ul>
          {
            status === 'authenticated' || storeAuthBack.status === 'authenticated'
            ?  button && <Dropdown >Logout</Dropdown>
            : button && <a href='/auth/login'>
              {/* <Button buttonStyle='btn--outline'>Login</Button> */}
              <Button buttonStyle='btn--outline' link='/auth/login'>Ingresar</Button>
            </a> 
          }
        </div>
      </nav>
    </>
  );
}

export default Nav;