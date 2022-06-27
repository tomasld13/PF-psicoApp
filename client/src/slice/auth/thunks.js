import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers.js';
import { checkingCredentials, logout, login, loginBack } from './authSlice.js';

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result  = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPassword = (paciente) => {

    paciente.name = paciente.displayName;
    delete paciente.displayName;

    console.log(JSON.stringify(paciente));
    return async (dispatch) => {
        dispatch( checkingCredentials() );

        // Acá se haría la peticion al backend para registrar el usuario
        // const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        try {
            
            const result = await fetch('http://localhost:3001/api/paciente', {
                method: 'POST',
                body: JSON.stringify(paciente),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await result.json();

            if (data.error) {
                console.log(data);
                return dispatch(logout(data.error));

            }
            dispatch( loginBack(data));

        } catch (error) {
            console.log(error);
            dispatch(logout(error));
        }
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
    }
}