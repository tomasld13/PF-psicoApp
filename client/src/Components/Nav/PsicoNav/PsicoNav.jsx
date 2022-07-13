import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Button/Button';
import { Link, animateScroll as scroll } from 'react-scroll'
import './PsicoNav.css';
import { startLogout } from '../../../slice/auth/thunks';
import logoImage from '../logo.png'
import Dropdown from '../Dropdown';

function PsicoNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const {displayName, status} = useSelector(state => state.auth.authFirebase);
  const storeAuthBack = useSelector(state => state.auth.authBack);
  const storeGoogle = useSelector(state => state.auth.authGoogle); 
  
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
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <div>
          {
            status === 'authenticated' || storeAuthBack.status === 'authenticated' 
            ? <div className='text-user'>Hola, {!displayName ? storeAuthBack.name : displayName}!</div> 
            : null
          }
          </div>
            <li className='nav-item'>
              <a
              href='/psicohome' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <Link 
              smooth={true}
              offset={20} 
              duration={700}
              to='support' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Más Información
              </Link>
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
            storeAuthBack.status === 'authenticated' || storeGoogle.status === 'authenticated'
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

export default PsicoNav;