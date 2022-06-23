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