import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../slice/auth/thunks';

function Dropdown() {

    const [showOptions, setShowOptions] = useState(false)

    const dispatch = useDispatch()

    const handleClick = () => {
        setShowOptions(!showOptions)
    }

    const onLogout = () => {
        dispatch(startLogout());
    }

  return (

    <div class="relative inline-block text-left">
    <div>
      <button 
      type='button'
      class='mr-3  inline-flex justficy-center w-full rounded-md border border-g bg-primary'
      onClick={handleClick}
      id="menu-button" 
      aria-expanded='true'
      aria-haspopud='true'
      >
        <svg class="-mr-1 ml-2 h-5 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    {showOptions && (
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none" >
              <a href="/perfil" class="text-gray-700 block px-4  py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Perfil</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="menu-item-1">Mensajes</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Calendario</a>
              <form action="#" role="none">
                <button 
                // type="submit" 
                class="text-gray-700 block w-full text-left px-4 py-2 text-sm" 
                role="menuitem" 
                tabindex="-1" 
                id="menu-item-3"
                onClick={onLogout}
                >
                    Cerrar Sesión
                </button>
              </form>
            </div>
          </div>
    )}
  </div> 
  )}

export default Dropdown