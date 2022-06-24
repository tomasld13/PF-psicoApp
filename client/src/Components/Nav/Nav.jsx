import React from 'react'
import { useSelector } from 'react-redux'

export function Nav() {
  const palabra = useSelector(state => state.palabra)
  return (
    <div>
      Nav 
      
    </div>
  )
}