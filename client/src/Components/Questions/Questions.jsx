import Question from "../Question/Question.jsx";
import style from "../Questions/Questions.module.css"
import SectionTitle from '../SectionTitle/SectionTitle'
import img01 from "./img-questions-01-removebg-preview.png"
import img02 from "./img-questions-02-removebg-preview.png"

export default function Questions() {
  return (
    <div className={style.content}>
      <div className={style.img01}><img src={img01} /></div>
      <div className={style.contentQuestions}>
      <SectionTitle subheading='Preguntas Frecuentes' heading='' />
        <Question nameQuestion="¿Por que necesitas un Psicologo?" 
        descQuestion={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."}/><hr/>

        <Question nameQuestion="¿Cual es la duración de una sesión?" 
        descQuestion={`Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32`}/><hr/>

        <Question nameQuestion="¿De dónde viene?" 
        descQuestion={`Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32`}/><hr/>

        <Question nameQuestion="Si no puedo, ¿puedo cancelar la sesión?" 
        descQuestion={`Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32`}/><hr/>

        <Question nameQuestion="¿Necesito guardar los datos de mi tarjeta de crédito?" 
        descQuestion={`Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32`}/><hr/>

        <Question nameQuestion="¿Cuántas sesiones necesitas en promedio?" 
        descQuestion={`Es una pregunta individual y depende del objetivo principal de la persona. A veces, puede tomar dos o tres sesiones, mientras que otras veces puede llegar a tomar años con sesiones semanales regulares.
        La mejor manera es discutir los objetivos y problemas con un especialista
        y hacer un plan de acción en base al objetivo. Psicologos van a decir cuántas sesiones necesitará la persona para resolver sus problemas.`}/><hr/>


      </div>
      <div className={style.img02}><img src={img02} /></div>
    </div>
  )
}
