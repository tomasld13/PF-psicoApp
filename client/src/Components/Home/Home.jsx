import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer.jsx';
import Landing from '../Landing/Landing.jsx';
import Nav from '../Nav/Nav'
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
