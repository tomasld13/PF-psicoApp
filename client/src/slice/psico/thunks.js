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
            dispatch(getPsychoByID(data))
            
        } catch (error) {
            return (error)           
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

