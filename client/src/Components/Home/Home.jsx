import React from 'react'
import Features from '../Features/Features.jsx';
import Landing from '../Landing/Landing.jsx';
import SubSectionHome from '../SubSectionHome/SubSectionHome.jsx';
import Questions from "../Questions/Questions.jsx"
import Testimonials from '../Testimonials/Testimonials.jsx';

export function Home() {
  return (
    <div>
      <Landing />
      <SubSectionHome />
      <h2 className="text-3xl py-2.5">¿En qué aspectos trabaja la psicología?</h2>
      <Features />
      <Questions />
      <h2 className="text-3xl py-2.5">Testimonios de nuestros clientes</h2>
      <Testimonials />
    </div>
  );
}
