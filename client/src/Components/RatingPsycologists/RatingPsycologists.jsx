import { Carousel } from "react-responsive-carousel";
import Card from "../Card/Card.jsx";
import style from "./style.module.css"


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