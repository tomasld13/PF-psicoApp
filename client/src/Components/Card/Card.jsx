import React from 'react'
import style from "./Card.module.css"
import img from "../Testimonials/face1.jpg"

export default function Card() {
  return (
    <div className={style.content} >
        <img src={img}/>
        <h2> Nombre Apellido</h2>
        <h3> Especialidad</h3>
        <h3> Experiencia</h3>
        <h3> Rating</h3>
    </div>
  );
}