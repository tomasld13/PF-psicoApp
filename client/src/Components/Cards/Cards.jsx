import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPsicology, filterPsicology } from "../../slice/psico/thunks";
import Card from "../Card/Card";
import styles from '../Cards/cards.module.css';


const itemsPerPage = 6;

export default function Cards() {
  
  const [auxSwitchAlfa, setSwitchAlfa] = useState(true); 
  const [currentPage, setCurrentPage] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [inputFind, setInputFind] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsicology());
  }, []);
  
  const { psychologists, spatiality } = useSelector(state => state.psicology)

  // Crea el indice siguiente para pasar al siguiente grupo de 6 psicologos
    const nextHandler = () => {
        const nextPage = currentPage + 1;
        
        const firstIndex = nextPage * itemsPerPage;
        
        if(firstIndex >= psychologists.length) return;
        
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
    if(psychologists.length === 0) alert('No hay psicologos');
    else
    [...psychologists].sort((a,b) => {
      if (auxSwitchAlfa) {
        setSwitchAlfa(false);
        if(a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        
        return 0;
      }
      setSwitchAlfa(true);
      if(a.name < b.name) return 1;
      else if (a.name > b.name) return -1;
      return 0;
    });
  }

  const handlerChange = (e) => {
    setInputFind(e.target.value);
  }

  const onChangeFilter = (e) => {
    dispatch(filterPsicology(e.target.value));
  }

  return (
    <section className={styles.section_cards}>
      <div className={styles.btn_container}>
        <div>
          <input type="text" placeholder="Psicologo..." onChange={e => handlerChange(e)} value={inputFind}/>
          <button onClick={() => {
            const find = psychologists.find(psycho => inputFind === psycho.name);
            console.log(find);
          }}>Buscar</button>
        </div>
        <button onClick={handlerClick}>Ordenar</button>
        <div>
          <select name="especialidad" id="especialidad" onChange={onChangeFilter}>
            <option selected value="0"> Elige una especialidad </option>
            <option value="Clinica">Psicologia Clinica</option>
            <option value="Educacional">Psicologia Educacional</option>
            <option value="Deportiva">Psicologia Deportiva</option>
            <option value="Forense">Psicologia Forense</option>
            <option value="Organizacional">Psicologia Organizacional</option>
          </select>
        </div>
      </div>
      <div>
        <h3>With what psycologists can help you?</h3>
        <div className={styles.cards_container}>
          {
            spatiality.length !== 0 ? [...spatiality].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <Card key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidade.especialidad}
                      ciudad={psycho.ciudad.name}/>
            }) : psychologists.length > 0 ? [...psychologists].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <Card key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidade.especialidad}
                      ciudad={psycho.ciudad.name}/>
            }) : (<div>
                  Loading...
                </div>)
          }
        </div>
        <div>
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>
      </div>
    </section>
  );
}
