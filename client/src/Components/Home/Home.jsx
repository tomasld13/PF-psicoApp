import React from 'react'
import { useSelector } from 'react-redux'

export function Home() {
  const palabra = useSelector(state => state.palabra)
  return (
    <div>
      <h1>Medic App</h1>
      <h2>{palabra}</h2>
    </div>
  )
}