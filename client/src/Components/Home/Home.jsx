import React from 'react'
import Landing from '../Landing/Landing.jsx';
import Testimonials from '../Testimonials/Testimonials.jsx';
export function Home() {
  return (
    <div>
      <Landing />
      <h2>Testimonios de nuestros clientes</h2>
      <Testimonials />
    </div>
  );
}
