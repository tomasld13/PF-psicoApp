import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer.jsx';
import Landing from '../Landing/Landing.jsx';
import Nav from '../Nav/Nav'


export function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}
