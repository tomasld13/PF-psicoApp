import React from 'react'
import style from "./Card.module.css"
import img from "../Testimonials/face1.jpg"

export default function Card() {
  return (
    <div className={style.content} >
        <div>
            <img src={img}/>
            <div>
                <h2> Nombre Apellido</h2>
                <h2>Ciudad</h2>
            </div>
        </div>
        <input type="range" />
        <h3> Especialidad</h3>
        <h3> Experiencia</h3>
    </div>
  );
}