import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Link, animateScroll as scroll } from 'react-scroll'
import { Link as LK} from 'react-router-dom';
import './Nav.css';
import { startLogout } from '../../slice/auth/thunks';
import logoImage from './logo.png'
import Dropdown from './Dropdown';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
          <LK to='/' className='LogoNavBar pt-3' onClick={closeMobileMenu}>
            <img src={logoImage} alt="logo image" />
          </LK>
        <div className='textUserDiv'> 
        {
            storeGoogle.status === 'authenticated' || storeAuthBack.status === 'authenticated' 
            ? <div className='textUser'>{!storeGoogle.name ? storeAuthBack.name : storeGoogle.name}</div> 
            : null
          }
        </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LK
              smooth={true}
              offset={50} 
              duration={700}
              to='/'
              hrefLang="#about" 
              className='nav-links' 
              onClick={closeMobileMenu}>
                Nosotros
              </LK>
            </li>
            <li className='nav-item'>
              <Link 
              smooth={true}
              offset={20} 
              duration={700}
              to='questions' 
              className='nav-links' 
              onClick={closeMobileMenu}>
                FAQs
              </Link>
            </li>
            <li className='nav-item'>
              <LK
                to='/psicohome'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Soy Psicólogo
              </LK>
            </li>
            <li className='nav-item'>
              <LK
                to='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contacto
              </LK>
            </li>

            {storeAuthBack.status === 'authenticated' || storeGoogle.status === 'authenticated' ? null : (
              <li>
              <a
                href='/auth/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Registrarse
              </a>
            </li>
            )}
          </ul>
          {
            storeAuthBack.status === 'authenticated' || storeGoogle.status === 'authenticated'
            ?  button && <Dropdown >Logout</Dropdown>
            : button && <a href='/auth/login'>
              {/* <Button buttonStyle='btn--outline'>Login</Button> */}
              <button className='bg-primary ing' link='/auth/login'>Ingresar</button>
            </a> 
          }
        </div>
      </nav>
    </>
  );
}

export default Nav;