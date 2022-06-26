import { getPsychos, filterSpatiality } from './psicologySlice.js';

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