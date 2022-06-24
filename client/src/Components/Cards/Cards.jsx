import { useState } from "react";
import styles from '../Cards/cards.module.css';

const auxPsychologists = [
    {
      id: 3,
      nombre: 'Tomas',
      experiencia: 10,
      edad: 46
    },
    {
        id: 1,
        nombre: 'Alejandro',
        experiencia: 4,
        edad: 29
    },
    {
        id: 2,
        nombre: 'Miguel',
        experiencia: 2,
        edad: 25
    },
    {
      id: 4,
      nombre: 'Sandro',
      experiencia: 2,
      edad: 25
    },
    {
      id: 5,
      nombre: 'Sandra',
      experiencia: 2,
      edad: 25
    },
    {
      id: 6,
      nombre: 'Leon',
      experiencia: 2,
      edad: 25
    },
    {
      id: 7,
      nombre: 'Maria',
      experiencia: 2,
      edad: 25
    },
    {
      id: 8,
      nombre: 'Luis',
      experiencia: 2,
      edad: 25
    },
    {
      id: 9,
      nombre: 'Pablo',
      experiencia: 2,
      edad: 25
    },
    {
      id: 10,
      nombre: 'Will',
      experiencia: 2,
      edad: 25
    },
    {
      id: 11,
      nombre: 'Estefa',
      experiencia: 2,
      edad: 25
    },
    {
      id: 12,
      nombre: 'Nico',
      experiencia: 2,
      edad: 25
    },
];

const itemsPerPage = 6;

export default function Cards() {
  
  const [auxSwitchAlfa, setSwitchAlfa] = useState(true); 
  const [currentPage, setCurrentPage] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);

  // Crea el indice siguiente para pasar al siguiente grupo de 6 psicologos
    const nextHandler = () => {
        const nextPage = currentPage + 1;
        
        const firstIndex = nextPage * itemsPerPage;
        
        if(firstIndex >= auxPsychologists.length) return;
        
        setFirstIndex(firstIndex);
        setCurrentPage(nextPage);
    }

    // Crea el indice anterior para devolver al anterior grupo de 6 psicologos
    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setFirstIndex(firstIndex);
        setCurrentPage(prevPage);
    }

  const handlerClick = () => {
    if(auxPsychologists.length === 0) alert('No hay psicologos');
    else
    auxPsychologists.sort((a,b) => {
      if (auxSwitchAlfa) {
        setSwitchAlfa(false);
        if(a.nombre > b.nombre) return 1;
        else if (a.nombre < b.nombre) return -1;
        return 0;
      }
      setSwitchAlfa(true);
      if(a.nombre < b.nombre) return 1;
      else if (a.nombre > b.nombre) return -1;
      return 0;
    });
  }

  return (
    <section className={styles.section_cards}>
      <div className={styles.btn_container}>
        <div>
          <input type="text" placeholder="Psicologo..."/>
          <button>Buscar</button>
        </div>
        <button onClick={handlerClick}>Ordenar</button>
      </div>
      <div>
        <h3>With what psycologists can help you?</h3>
        <div className={styles.cards_container}>
          {
            auxPsychologists.length > 0 ? [...auxPsychologists].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <div key={psycho.id} className={styles.card}>
                <h3>Nombre: {psycho.nombre}</h3>
                <p>Edad: {psycho.edad}</p>
                <p>Experiencia: {psycho.experiencia}</p>
              </div>
            }) : (<div>
                  Loading...
                </div>)
          }
        </div>
        <button>Get started now</button>
        <div>
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>
      </div>
    </section>
  );
}
