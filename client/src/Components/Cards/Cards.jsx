import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPsicology, filterPsicology, sortByName, sortByExp } from "../../slice/psico/thunks";
import Card from "../Card/Card";
import { Button } from '../Button/Button'
import styles from '../Cards/cards.module.css';
import Loading from '../Loading/Loading.jsx'
import SectionTitle from '../SectionTitle/SectionTitle'

const itemsPerPage = 6;

export default function Cards() {
  
  const [auxSwitchAlfa, setSwitchAlfa] = useState(true); 
  const [currentPage, setCurrentPage] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [inputFind, setInputFind] = useState('');
  const [find, setFind] = useState([]);
  const [sort, setSort] = useState('');

  //const [inputGender,setInputGender] = useState('')
  const [gender, setGender] = useState([]);
<<<<<<< HEAD
=======
  
>>>>>>> frontend

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsicology());
  }, []);

  
  const { psychologists, spatiality } = useSelector(state => state.psicology)
  //console.log(psychologists)
  // Crea el indice siguiente para pasar al siguiente grupo de 6 psicologos
    const nextHandler = () => {
        const nextPage = currentPage + 1;
        
        const firstIndex = nextPage * itemsPerPage;
        if (spatiality.length !==0 ) {
          if(firstIndex >= spatiality.length) return;
        }
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

  const handlerClick = (e) => {
    dispatch(sortByName(e.target.value));
    setCurrentPage(0);
    setSort(e.target.value);
  }

  const handlerClickExp = (e) => {
    dispatch(sortByExp(e.target.value));
    setCurrentPage(0);

  }

  const handlerChange = (e) => {
    setInputFind(e.target.value);
  }

  // const handlerChangeGender = (e)=> {
  //   setInputGender(`${e.target.value}`)
  // }

  const onChangeFilter = (e) => {
    dispatch(filterPsicology(e.target.value));
  }
  


  // const cleanFind = () => {
  //   setFind([])
  // }

  const handleRemove = (e) => {
    e.preventDefault()
    dispatch(filterPsicology('0'))
    setSort('')
    setInputFind('')
    setFind([])
    setGender([])
    document.getElementById("orden").value= " "
    document.getElementById("genero").value= " "
    document.getElementById("especialidad").value= " "
<<<<<<< HEAD
=======
    document.getElementById("exp").value= " "
>>>>>>> frontend
  }

  useEffect(() => {
    dispatch(getPsicology());
  }, []);

  return (
    <section /*className={styles.section_cards}*/ className="flex justify-around">
      <div 
      //className={styles.btn_container}
      className="container my-16 ml-2.5 py-10 w-64 px-2.5 bg-secundary border border-primary rounded-lg"
      >

        <div className="flex flex-col content-center items-center">
          <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Psicologo..." onChange={e => handlerChange(e)} value={inputFind}/>
          <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5' onClick={(e) => {
            handlerChange(e)
            const findInput = psychologists.filter(psycho => {
              return psycho.name.toLowerCase().includes(inputFind.toLowerCase()) || psycho.lastname.toLowerCase().includes(inputFind.toLowerCase())
            });
            setFind(findInput)
          }}>Buscar</button>
          {/* <button onClick={() => cleanFind()}>X</button> */}
        </div>
        <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' 
        name="especialidad" 
        id="orden" 
        onChange={handlerClick}>
            <option selected disabled value=" "> Orden... </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>

        <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' 
        name="experiencia" 
        id="exp" 
        onChange={handlerClickExp}>
            <option selected disabled value=" "> Experiencia </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>  
        {/* <button onClick={handlerClick}>Ordenar</button> */}
        <div>
          <div>
          <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' 
        name="especialidad" 
        id="genero" 
        onChange={(e)=>{
            console.log(e.target.value, "target value", `${e.target.value}`)
            const iGender = psychologists.filter(psycho => {
              //console.log( `${psycho.generoId}`, `${e.target.value}`)
              return (`${psycho.generoId}` === `${e.target.value}`)
            });
            setGender(iGender)
            }}>
            <option selected disabled value=" "> Género </option>
            <option value="1">Hombre</option>
            <option value="2">Mujer</option>
            <option value="3">No Binario</option>
<<<<<<< HEAD
        </select>
=======
          </select>
>>>>>>> frontend
          </div>
          <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' 
          name="especialidad" 
          id="especialidad" 
          onChange={onChangeFilter}>
            <option selected disabled value=" "> Elige una especialidad </option>
            <option value="Clinica">Psicologia Clinica</option>
            <option value="Educacional">Psicologia Educacional</option>
            <option value="Deportiva">Psicologia Deportiva</option>
            <option value="Forense">Psicologia Forense</option>
            <option value="Organizacional">Psicologia Organizacional</option>
          </select>
        </div>

        <button className="bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 mx-2.5 h-10" onClick={(e)=>handleRemove(e)}>Limpiar filtros</button>

      </div>

      <div>
        <SectionTitle heading='¿Cuál psicólogo puede ayudarte?' subheading=""/>
        <div className={styles.cards_container}>
          {
            find.length > 0 ? [...find].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <Card
                      id={psycho.psicologo.id}
                      key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidades[0].especialidad}
                      ciudad={psycho.ciudad.name}/>
            }) :

            gender.length > 0 ? [...gender].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <Card
                      id={psycho.psicologo.id}
                      key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidades[0].especialidad}
                      ciudad={psycho.ciudad.name}/>
            }) :


            spatiality.length !== 0 ? [...spatiality].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              
              return <Card 
                      id={psycho.psicologo.id}
                      key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidades[0].especialidad}
                      ciudad={psycho.ciudad?.name}/>
            }) : psychologists.length > 0 ? [...psychologists].splice(
              firstIndex,itemsPerPage
            ).map(psycho => {
              return <Card
                      id={psycho.psicologo.id}
                      key={psycho.id} 
                      nombreCompleto={`${psycho.name} ${psycho.lastname}`}
                      experiencia={psycho.psicologo.yearsExperience}
                      especialidad={psycho.psicologo.especialidades[0]?.especialidad}
                      ciudad={psycho.ciudad?.name}/>
            }) :
                (<div>
                  <Loading/>
                </div>)
          }
        </div>
        <div>
          <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 mx-2.5 h-10' onClick={prevHandler}>Prev</button>
          <input className="bg-white text-primary border border-primary font-bold py-2 px-2 text-center rounded my-2.5 mx-2.5 h-10 w-10" value={ (currentPage + 1) }/>
          <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 mx-2.5 h-10' onClick={nextHandler}>Next</button>
        </div>
      </div>
    </section>
  );
}
