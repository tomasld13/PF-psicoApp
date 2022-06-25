import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword } from '../../firebase/providers.js';
import { checkingCredentials, logout, login } from './authSlice.js';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result  = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    return async (dispatch) => {
        dispatch( checkingCredentials() );

        // Acá se haría la peticion al backend para registrar el usuario
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if (!ok) return dispatch(logout({errorMessage}));

        dispatch( login({uid, displayName, email, photoURL}));
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