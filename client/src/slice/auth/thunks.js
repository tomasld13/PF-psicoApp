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

    console.log(paciente);
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

    return async (dispatch) => {
        dispatch( checkingCredentials() );

        // Acá se haría la peticion al backend para la autenticacion
        const {ok, uid, displayName, photoURL, errorMessage} = await loginWithEmailPassword(email, password);

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch( login({email, uid, displayName, photoURL}));
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