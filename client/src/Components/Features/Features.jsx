import React from 'react'
import FeaturesBox from './FeaturesBox';
import featureImage from './img/home-05.jpg'
import featureImage1 from './img/home-06.jpg'
import featureImage2 from './img/home-07.jpg'
import featureImage3 from './img/home-08.jpg'
import featureImage4 from './img/home-09.jpg'
import featureImage5 from './img/home-10.jpg'

import './Features.css'
import SectionTitle from '../SectionTitle/SectionTitle';

function Features() {
  return (
    <div id='features'>
      <SectionTitle heading='¿En qué aspectos trabaja la psicología?' subheading=''/>
        <div className="features-container">
            <FeaturesBox image={featureImage} title='Problemas de autoestima'/> 
            <FeaturesBox image={featureImage1} title='Problemas con relaciones personales'/> 
            <FeaturesBox image={featureImage2} title='Agotamiento causado por el trabajo'/> 
        </div>
        <div className="features-container">
            <FeaturesBox image={featureImage3} title='Procastinación y desinterés en la vida'/> 
            <FeaturesBox image={featureImage4} title='Anciedad o pánico'/> 
            <FeaturesBox image={featureImage5} title='Desentendimiento acerca de qué hacer con su vida'/> 
        </div>
    </div>
  )
}

export default Features;