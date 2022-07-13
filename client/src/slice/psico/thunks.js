import axios from 'axios';
import { loginGoogle } from '../auth/authSlice.js';
import { getPsychos,
        filterSpatiality,
        sortByNamePsycho,
        getPsychoByID,
        postMercadopago,
        calendar,
        getProvinciasSelect,
        getCiudadesSelect,
        sortByExpPsycho,
        getPacientByID,
        getPatients,
        getPsychologistFavs,
        getPsicologoFacturas,
        getSaldoTotalPsicologo,
        postMercadoPsicologo} from './psicologySlice.js';

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

export const getPatient = () => {
    return async (dispatch) => {

        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/paciente`);

            const dataPaciente = await response.json();

            dispatch(getPatients(dataPaciente));

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

export const getPacientID = (id) => {//Consigue Paciente por ID
    return async (dispatch)=> {
        try {
            const data = await axios(`${process.env.REACT_APP_API}/api/paciente/${id}`);
            dispatch(getPacientByID(data.data));
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
            
            dispatch(getCiudadesSelect(data));
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

    return async () => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/favoritos/${idPsycho}`, {
            method: method,
            body: JSON.stringify({pacienteID: idUser}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await rs.json();
        console.log(data);
    }
}

export const getPsychoFavs = (id) => {
    return async (dispatch) => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/favoritos/${id}`);
        const data = await rs.json();
        dispatch(getPsychologistFavs(data));
    }
}

export const deleteUser = (id, user, token) => {
    return async () => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/${user}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            }
        });

        const data = await rs.json();

        console.log(data);
    }
}

export const suspenderPsico = (id, token) => {
    return async () => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/psicologo/suspender/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            }
        });

        const data = await rs.json();

        console.log(data);
    }
}


export const psicologoFacturas = (id) => {
    return async (dispatch) => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/factura/psicologo/${id}`);
        const data = await rs.json();
        dispatch(getPsicologoFacturas(data));
    }
}

export const getSaldoTotal = (id) => {
    return async (dispatch) => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/psicologo/saldoTotal/${id}`);
        const data = await rs.json();
        dispatch(getSaldoTotalPsicologo(data));
    }
}

export const postSaldoTotal = (data) => {
    return async (dispatch) => {
        try {
            const rs = await axios.post(`${process.env.REACT_APP_API}/api/mercadopagoPsicologo`, {
                method: 'POST',
                body: data
            });
            dispatch(postMercadoPsicologo(rs.data));
        } catch (error) {
            return (error);
        }
    }
}

export const activarPsico = (id, token) => {
    return async () => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/psicologo/activar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            }
        });

        const data = await rs.json();

        console.log(data);
    }
}

export const uploadImage = (id, img) => {

    return async () => {
        
        const formData = new FormData();
        formData.append('archivo', img);

        const rs = await fetch(`${process.env.REACT_APP_API}/api/upload/user/${id}`, {
            method: 'PUT',
            body: formData  
        });

        if (rs.ok) {
            const data = await rs.json();
            // dispatch(loginGoogle(data));

            if (JSON.parse( localStorage.getItem('usuario') )) {
                const usuarioBack = JSON.parse( localStorage.getItem('usuario') );
                usuarioBack.avatar = data.avatar;
                localStorage.setItem('usuario', JSON.stringify(usuarioBack));
            } else {
                const usuarioGoogle = JSON.parse( localStorage.getItem('usuarioGoogle') );
                usuarioGoogle.user.avatar = data.avatar;
                localStorage.setItem('usuarioGoogle', JSON.stringify(usuarioGoogle));
            }

        } else {
            const data = await rs.json();
            console.log(data);
        }
    }
}
