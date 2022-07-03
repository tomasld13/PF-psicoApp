import { async } from '@firebase/util';
import { getPsychos, filterSpatiality, sortByNamePsycho, getPsychoByID, postMercadopago  } from './psicologySlice.js';
import axios from 'axios';

export const getPsicology = () => {
    return async (dispatch) => {

        try {
            const response = await fetch('http://localhost:3001/api/psicologo');

            const dataPsico = await response.json();

            dispatch(getPsychos(dataPsico));

        } catch (error) {
            return error
        }

    }
}

export const filterPsicology = (spatiality) => {
    return async (dispatch) => {
        try {
            
            if (spatiality === '0') {
                getPsicology();
                return dispatch(filterSpatiality([]));
            }

            const response = await fetch(`http://localhost:3001/api/psicologo/especialidad/Psicologia ${spatiality}`);

            const data = await response.json();

            dispatch(filterSpatiality(data));

        } catch (error) {
            return error
        }
    }
}

export const sortByName = (sort) => {
    return (dispatch) => {
        dispatch(sortByNamePsycho(sort));
    }
}

export const getPsychologyID = (id) => {//Consigue Psicologos por ID
    return async (dispatch)=> {
        try {
            const response = await fetch(`http://localhost:3001/api/psicologo/${id}`);
            const data = await response.json();
            
            const dias = getDiasPsicologos(data.dia);
            
            const horarios = minMaxTime(data.finHorario, data.inicioHorario);

            data.formatoDias = dias;
            data.formatoHorarios = horarios;

            dispatch(getPsychoByID(data));
            
        } catch (error) {
            return (error)           
        }
    }
}

const getDiasPsicologos = (dias) => {
    return dias.map(m => {
        const dia = m.fecha.split("-")
        return new Date(dia[0],dia[1]-1,dia[2])
    });
}

const minMaxTime = (finHorario, inicioHorario) => {
    let [maxH, maxM] = finHorario.split(":");
    maxH = parseInt(maxH);
    maxM = parseInt(maxM);
    let max = new Date();
    max = max.setHours(maxH,maxM);
    let min = new Date();
    let [minH, minM] = inicioHorario.split(":");
    maxH = parseInt(minH);
    maxM = parseInt(minM);
    min = min.setHours(minH,minM);

    return {min, max}
}

export const agendarCita = (idPsicologo, diaHora) => {

    return async () => {
        try {
            const rs = await fetch(`http://localhost:3001/api/horarios/psicologo/${idPsicologo}`,{
                method: 'POST',
                body: JSON.stringify(diaHora),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (rs.ok) {
                alert('Se agendo la cita con exito');
            }

        } catch (error) {
            return error
        }
    }
}

export const updateCalendar = (idPsicologo) => {

    return async () => {
        try {
            const rs = await fetch(`http://localhost:3001/api/horarios/psicologo/${idPsicologo}`);

            const rsData = await rs.json();
            // console.log(rsData);
        } catch (error) {
            return error
        }
    }
}

export const postMP = (data) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://localhost:3001/api/mercadopago', data);
            dispatch(postMercadopago(resp.data));
        } catch (error) {
            return (error)
        }
    }
}

