import { signInWithGoogle, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers.js';
import { checkingCredentials, logout, login, loginBack, logoutBack, errorRegisterBack, logoutGoogle, checkingGoogle, loginGoogle } from './authSlice.js';
import Swal from "sweetalert2";

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        dispatch(logout());
        dispatch(logoutBack());

        const result  = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        const rsPacientes = await fetch(`${process.env.REACT_APP_API}/api/paciente`);

        const dataPacientes = await rsPacientes.json();

        const pacienteEmail = dataPacientes.find(paciente => paciente.email === result.email);

        if (!pacienteEmail) {
            dispatch(checkingGoogle(result));
        } else {
            dispatch(loginEmailPasswordGoogle(result.email, result.uid, result.photoURL));
        }
    }
}

export const startCreatingUserWithEmailPasswordPatient = (paciente) => {

    console.log(paciente);
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
                dispatch(logoutGoogle());
                return dispatch(logoutBack());
            }


            if(paciente.google) {
                dispatch(logoutBack());
                const pacienteGoogle = data[0]
                pacienteGoogle.photo = paciente.photo;
                localStorage.setItem('usuarioGoogle', JSON.stringify(data[0]));
                dispatch(loginGoogle(pacienteGoogle));
            } else {
                localStorage.setItem('usuario', JSON.stringify(data[0]));
                dispatch(logoutGoogle());
                dispatch(loginBack(data[0]));
            }

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
        dispatch( logoutGoogle() );

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
        dispatch( logoutGoogle() );

        const result = await fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!result.ok) {
            dispatch(errorRegisterBack('Usuario / Password no son correctos'));
            dispatch(logoutGoogle());
            return dispatch(logoutBack());
        }

        const data = await result.json();

        localStorage.setItem('usuario', JSON.stringify(data));

        dispatch(loginBack(data));

    }
}

export const loginEmailPasswordGoogle = (email, password, photoURL) => {

    const login = {email,password};

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );
        dispatch( logoutBack() );

        console.log(login);
        const result = await fetch(`${process.env.REACT_APP_API}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!result.ok) {
            dispatch(errorRegisterBack('Error al registrase con Google'));
            return dispatch(logoutGoogle());
        }

        const data = await result.json();
        data.user.photo = photoURL;
        console.log(data);
        localStorage.setItem('usuarioGoogle', JSON.stringify(data));

        dispatch(loginGoogle(data));
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();

        dispatch(logout());
        dispatch(logoutBack());
        localStorage.setItem('usuario', JSON.stringify({}));
        localStorage.setItem('usuarioGoogle', JSON.stringify({}));
    }
}