import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';

export function Home() {
  const palabra = useSelector(state => state.palabra)
  return (
    <div>
      <h1>Psico App</h1>
      <Landing />
      <h2>{palabra}</h2>
      
    </div>
  );
}
