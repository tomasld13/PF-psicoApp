import { Carousel } from "react-responsive-carousel";
import Card from "../Card/Card.jsx";
import style from "./style.module.css"
import img1 from '../Testimonials/face1.jpg'
import img2 from '../Testimonials/face2.jpg'
import img3 from '../Testimonials/face3.jpg'


export default function RaitingPsychologists() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={false}
    interval={6100}
    >
        <div className={ style.cardContent }><Card/><Card/><Card/></div>
        <div className={ style.cardContent }><Card/><Card/><Card/></div>
        <div className={ style.cardContent }><Card/><Card/><Card/></div>
        
    </Carousel>
  )
}

/*"[
  {
    ""id"": 32,
    ""name"": ""Dominic Smith"",  1
    ""lastname"": ""Fuller Richardson"",
    ""email"": ""odio@hotmail.com"",
    ""telephone"": ""1133445566"",
    ""address"": ""P.O. Box 156, 8525 Dui Avenue"",
    ""birth"": ""2017/02/11"",
    ""rolId"": 2,
    ""generoId"": 2,
    ""ciudadId"": 868,
    ""psicologo"": {
        ""id"": 12,
        ""yearsExperience"": 10,
        ""honorario"": 10,
        ""especialidade"": {
            ""especialidad"": ""Psicologia Organizacional""
        }
    },
    ""ciudad"": {
    ""name"": ""San Miguel"",
    ""provincium"": {
        ""name"": ""Corrientes""
    }
  },
    ""genero"": {
        ""genero"": ""Masculino""
    },
    ""rol"": {
        ""name"": ""Psicologo""
    }
},

]"*/