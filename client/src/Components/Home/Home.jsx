import React from 'react'
import Features from '../Features/Features.jsx';
import Landing from '../Landing/Landing.jsx';
import Testimonials from '../Testimonials/Testimonials.jsx';

export function Home() {
  return (
    <div>
      <Landing />
      <h2>¿En qué aspectos trabaja la psicología?</h2>
      <Features />
      <h2>Testimonios de nuestros clientes</h2>
      <Testimonials />
    </div>
  );
}
