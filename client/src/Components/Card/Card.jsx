import React from 'react'
import style from "./Card.module.css"
import img from "../Testimonials/face1.jpg"

export default function Card({nombreCompleto, experiencia, especialidad, ciudad}) {

  return (
    <div className={style.content}>
        <div>
            <img src={img}/>
            <div>
                <h2>{nombreCompleto}</h2>
                <h3>Me encuentro en {ciudad}</h3>
            </div>
        </div>
        <input type="range" />
        <h3>Me especializo en {especialidad}</h3>
        <h3>{experiencia} años de experiencia</h3>
    </div>
  );
}