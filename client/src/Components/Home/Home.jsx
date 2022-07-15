import React from 'react'
import Features from '../Features/Features.jsx';
import Landing from '../Landing/Landing.jsx';
import SubSectionHome from '../SubSectionHome/SubSectionHome.jsx';
import Questions from "../Questions/Questions.jsx"
import Testimonials from '../Testimonials/Testimonials.jsx';
import PricingH from '../Pricing/PricingH'
import About from '../About/About.jsx';
import Benefits from '../Benefits/Benefits.jsx';
import styled from 'styled-components'

export function Home() {
  return (
    <Container>
      <Landing />
      <SubSectionHome />
      <About />
      <Features />
      <Benefits />
      <PricingH />
      <Questions />
      <Testimonials />
    </Container>
  );
}

const Container = styled.div`
  background-color: #212329;

`