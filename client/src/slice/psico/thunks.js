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
            console.log(horarios);
            data.formatoDias = dias;
            dispatch(getPsychoByID(data))
            
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

const getMonth = (month) => {
    switch(month){
    case "Jan":
        return 1
    case "Feb":
        return 2
    case "Mar":
        return 3
    case "Apr":
        return 4
    case "May":
        return 5
    case "Jun":
        return 6
    case "Jul":
        return 7
    case "Aug":
        return 8
    case "Sep":
        return 9
    case "Oct":
        return 10
    case "Nov":
        return 11
    default:
        return 12                       
    }
}

const minMaxTime = (finHorario, inicioHorario) => {
    let [maxH, maxM] = finHorario.split(":")
    maxH = parseInt(maxH)
    maxM = parseInt(maxM)
    let max = new Date()
    max = max.setHours(maxH,maxM)
    let min = new Date()
    let [minH, minM] = inicioHorario.split(":")
    maxH = parseInt(minH)
    maxM = parseInt(minM)
    min = min.setHours(minH,minM)
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

