import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'
import img1 from '../Testimonials/face1.jpg'
import img2 from '../Testimonials/face2.jpg'
import img3 from '../Testimonials/face3.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";

export default class Testimonials extends Component {
  render() {
    return (
      <div name='testimonios'>
        <SectionTitle heading="TESTIMONIOS DE NUESTROS CLIENTES" subheading=""/>
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={img2}/>
          <div className="myCarousel">
            <h3>Mery Stevenson</h3>
            <h4>Diseñadora</h4>
            <p>
              Para mi es importante tener una agenda estricta porque soy una 
              persona ocupada. Con PsicoApp puedo manejar mi agenda. 
              Es muy cómodo para mí! Yo he utlizado la aplicación por mas 
              de dos años, pudiendo organizarme mejor y asi seguiré!
            </p>
          </div>
        </div>

        <div>
          <img src={img1} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Músico</h4>
            <p>
              He intentado de encontrar un psicólogo ideal por años. 
              Acá pude encontrar grandes especialistas! Es muy cómodo para mi
              apuntar a mis problemas y caracteristicas y encontrar un psicologo. 
              Muchas gracias PsicoApp!
            </p>
          </div>
        </div>

        <div>
          <img src={img3} />
          <div className="myCarousel">
            <h3>Martina Gomez</h3>
            <h4>Profesora de Inglés</h4>
            <p>
              Nunca habia asistido a un psicologo antes. He tenido dificultades en el 
              trabajo y con mi pareja. 
              Entonces decidí probar un servicio psicologico. Y luego de un año puedo
              decir que salvó mi vida y mi relacion! Me encanta el servicio 
              y realmente lo recomiendo. 
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    );
  }
}