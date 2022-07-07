import { signInWithGoogle, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers.js';
import { checkingCredentials, logout, login, loginBack, logoutBack, errorRegisterBack, updatePacient } from './authSlice.js';
import axios from 'axios';
import Swal from "sweetalert2";

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result  = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPasswordPatient = (paciente) => {

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );

            const result = await fetch(`${process.env.REACT_APP_API}/api/paciente`, {
                method: 'POST',
                body: JSON.stringify(paciente),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await result.json();

            if (data.error) {
                dispatch(errorRegisterBack(data.error));
                return dispatch(logoutBack());
            }

            localStorage.setItem('usuario', JSON.stringify(data[0]));

            dispatch(loginBack(data[0]));

            Swal.fire(
                'La cuenta fue creada exitosamente',
                'success'
            );
    } 
}

export const startCreatingUserWithEmailPasswordPsycho = (psycho) => {

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );

            const result = await fetch(`${process.env.REACT_APP_API}/api/psicologo`, {
                method: 'POST',
                body: JSON.stringify(psycho),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await result.json();

            if (data.error) {
                dispatch(errorRegisterBack(data.error));
                return dispatch(logoutBack());
            }
            
            localStorage.setItem('usuario', JSON.stringify(data[0]));

            dispatch(loginBack(data[0]));

            Swal.fire(
                'La cuenta fue creada exitosamente',
                'success'
            );
    } 
}

export const startLoginWithEmailPassword = (email, password) => {

    const login = {email,password};

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );

        const result = await fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!result.ok) {
            dispatch(errorRegisterBack('Usuario / Password no son correctos'));
            return dispatch(logoutBack());
        }

        const data = await result.json();

        localStorage.setItem('usuario', JSON.stringify(data));

        dispatch(loginBack(data));

    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();

        dispatch(logout());
        dispatch(logoutBack());
        localStorage.setItem('usuario', JSON.stringify({}));
    }
}

export const updatePaciente = (id, data) => {
    console.log("ENTRO EN EL UPDATE")
    return async (dispatch) => {
        try {
            const resp = await axios.put(`${process.env.REACT_APP_API}/api/paciente/${id}`, data);
            console.log("ESTO ES DATA", data);
            console.log("ESTO ES RESPDATA", resp.data);
            dispatch(updatePacient(resp.data));
        } catch (error) {
            console.log(error)
        }
    }
}