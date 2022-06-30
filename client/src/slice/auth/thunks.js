import { signInWithGoogle, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers.js';
import { checkingCredentials, logout, login, loginBack, logoutBack, errorRegisterBack } from './authSlice.js';

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

            const result = await fetch('http://localhost:3001/api/paciente', {
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

            localStorage.setItem('paciente', JSON.stringify(data[0]));

            dispatch(loginBack(data[0]));
    } 
}

export const startCreatingUserWithEmailPasswordPsycho = (paciente) => {

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );

            const result = await fetch('http://localhost:3001/api/paciente', {
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

            dispatch(loginBack(data));
    } 
}

export const startLoginWithEmailPassword = (email, password) => {

    const login = {email,password};

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );

        const result = await fetch('http://localhost:3001/api/auth/login', {
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
        console.log(data)
        localStorage.setItem('paciente', JSON.stringify(data));

        dispatch(loginBack(data));

    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();

        dispatch(logout());
        dispatch(logoutBack());
        localStorage.setItem('paciente', JSON.stringify({}));
    }
}