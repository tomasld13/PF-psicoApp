import React from 'react'
import Features from '../Features/Features.jsx';
import Landing from '../Landing/Landing.jsx';
import SubSectionHome from '../SubSectionHome/SubSectionHome.jsx';
import Questions from "../Questions/Questions.jsx"
import Testimonials from '../Testimonials/Testimonials.jsx';
import Pricing from '../Pricing/Pricing'
import About from '../About/About.jsx';

export function Home() {
  return (
    <div>
      <Landing />
      <SubSectionHome />
      <About />
      <Features />
      <Pricing />
      <Questions />
      <Testimonials />
    </div>
  );
}
