import { async } from '@firebase/util';
import { getPsychos, filterSpatiality, sortByNamePsycho, getPsychoByID, postMercadopago, calendar, getProvinciasSelect, getCiudadesSelect, sortByExpPsycho, getPacientID  } from './psicologySlice.js';
import axios from 'axios';

export const getPsicology = () => {
    return async (dispatch) => {

        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/psicologo`);

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

            const response = await fetch(`${process.env.REACT_APP_API}/api/psicologo/especialidad/Psicologia ${spatiality}`);

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

export const sortByExp = (sort) => {
    return (dispatch) => {
        dispatch(sortByExpPsycho(sort));
    }
}

export const getPsychologyID = (id) => {//Consigue Psicologos por ID
    return async (dispatch)=> {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/psicologo/${id}`);
            const data = await response.json();
            
            const dias = getDiasPsicologos(data.dia);
            
            const horarios = minMaxTime(data.finHorario , data.inicioHorario);

            data.formatoDias = dias;
            data.formatoHorarios = horarios;

            dispatch(getPsychoByID(data));
            
        } catch (error) {
            return (error)           
        }
    }
}

// export const getPacientID = (id) => {//Consigue Paciente por ID
//     return async (dispatch)=> {
//         try {
//             const data = await axios(`${process.env.REACT_APP_API}/api/paciente/${id}`);
//             dispatch(getPacientByID(data));
//         } catch (error) {
//             return (error)           
//         }
//     }
// }

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
            const rs = await fetch(`${process.env.REACT_APP_API}/api/horarios/psicologo/${idPsicologo}`,{
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

export const postDateTime = (dateTime) => {
    return (dispatch) => {
        dispatch(calendar(dateTime));
    }
}

// export const postMP = (data) => {
//     return async (dispatch) => {
//         try {
//             const resp = await axios.post(`${process.env.REACT_APP_API}/api/mercadopago`, data);
//             dispatch(postMercadopago(resp.data));
//         } catch (error) {
//             return (error)
//         }
//     }
// }
export const postMP = (data, token) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API}/api/mercadopago`, {
                method: 'POST',
                body: data,
                headers: {
                    'x-token': `${token}`
                }
            });
            dispatch(postMercadopago(resp.data));
        } catch (error) {
            return (error)
        }
    }
}

export const getProvincias = () => {
    return async (dispatch) => {
        const provincias = [];
        try {
            const resp = await fetch(`${process.env.REACT_APP_API}/api/provincias`);
            const data = await resp.json();

            for (const iterator of data) {
                provincias.push({id: iterator.id, name: iterator.name});
            }
            
            dispatch(getProvinciasSelect(provincias));
        } catch (error) {
            return error;
        }
    }
}

export const getCiudades = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${process.env.REACT_APP_API}/api/provincias/${id}`);
            const data = await resp.json();

            dispatch(getCiudadesSelect(data.ciudads));
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanCiudades = () => {
    return (dispatch) => {
        dispatch(getCiudadesSelect([]));
    }
}

export const psychoFavs = (method, idUser, idPsycho) => {
    return () => {
        fetch(`${process.env.REACT_APP_API}/api/favoritos/${idPsycho}`, {
            method: method,
            body: JSON.stringify({id: idUser}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(rs => rs.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
    }
}
