import React from 'react'
import Features from '../Features/Features.jsx';
import Landing from '../Landing/Landing.jsx';
import SubSectionHome from '../SubSectionHome/SubSectionHome.jsx';
import Questions from "../Questions/Questions.jsx"
import Testimonials from '../Testimonials/Testimonials.jsx';
import PricingH from '../Pricing/PricingH'
import About from '../About/About.jsx';
import Benefits from '../Benefits/Benefits.jsx';

export function Home() {
  return (
    <div>
      <Landing />
      <SubSectionHome />
      <About />
      <Features />
      <Benefits />
      <PricingH />
      <Questions />
      <Testimonials />
    </div>
  );
}
