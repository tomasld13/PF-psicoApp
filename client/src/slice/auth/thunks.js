import { signInWithGoogle, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers.js';
import { checkingCredentials, logout, login, loginBack, logoutBack, errorRegisterBack, allFacturas, logoutGoogle, checkingGoogle, loginGoogle, facturasByMes } from './authSlice.js';
import axios from 'axios';
import Swal from "sweetalert2";

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        dispatch(logout());
        dispatch(logoutBack());

        const result  = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        try {
            const rsPaciente = await fetch(`${process.env.REACT_APP_API}/api/usuario/${result.email}`);
    
            if (!rsPaciente.ok) {
                dispatch(checkingGoogle(result));
            } else {
                dispatch(loginEmailPasswordGoogle(result.email, result.uid, result.photoURL));
            }


        } catch (error) {
            dispatch(errorRegisterBack('Error en la autenticación'));
            return dispatch(startLogout());
        }
    }
}
let a = 0;

export const startCreatingUserWithEmailPasswordPatient = (paciente) => {

    return async (dispatch) => {
        dispatch( checkingCredentials() );
        dispatch( logout() );
        dispatch( logoutGoogle() );

            const result = await fetch(`${process.env.REACT_APP_API}/api/paciente`, {
                method: 'POST',
                body: JSON.stringify(paciente),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await result.json();
            
            if (data.error) {

                return dispatch(logoutBack());
            }


            if(paciente.google) {
                dispatch(logoutBack());
                const pacienteGoogle = data[0]
                pacienteGoogle.photo = paciente.photo;
                pacienteGoogle.uid = paciente.password;
                localStorage.setItem('usuarioGoogle', JSON.stringify(data[0]));
                dispatch(loginGoogle(pacienteGoogle));
            } else {
                localStorage.setItem('usuario', JSON.stringify(data[0]));
                dispatch(logoutGoogle());
                dispatch(loginBack(data[0]));
            }
            
                Swal.fire(
                    'La cuenta fue creada exitosamente',
                    '',
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
                console.log("ENTRASTE AQUI",a = a + 1)
                if (a == 1) {
                    Swal.fire({
                        title: 'El email ya ha sido registrado',
                        text: data.error,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
                a = 0;
                return dispatch(logoutBack());
            }
            
            localStorage.setItem('usuario', JSON.stringify(data[0]));

            dispatch(loginBack(data[0]));

            Swal.fire(
                'La cuenta fue creada exitosamente',
                '',
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
        data.user.uid = password;
        localStorage.setItem('usuarioGoogle', JSON.stringify(data));

        dispatch(loginGoogle(data));
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();

        dispatch(logout());
        dispatch(logoutBack());
        dispatch(logoutGoogle());
        localStorage.setItem('usuario', null);
        localStorage.setItem('usuarioGoogle', null);
    }
}

export const updatePaciente = (id, data) => {
    return async () => {
        try {
            const resp = await axios.put(`${process.env.REACT_APP_API}/api/paciente/${id}`, data);

            const usuarioStorage = JSON.parse( localStorage.getItem('usuario') ) ? JSON.parse( localStorage.getItem('usuario') ) : JSON.parse( localStorage.getItem('usuarioGoogle') );
            
            if(usuarioStorage.user) {
                usuarioStorage.user.name = resp.data.name;
                usuarioStorage.user.lastname = resp.data.lastname;
                usuarioStorage.user.telephone = resp.data.telephone;
                usuarioStorage.user.email = resp.data.email;
                usuarioStorage.user.address = resp.data.address;

                if (JSON.parse( localStorage.getItem('usuario') )) {
                    localStorage.setItem('usuario', JSON.stringify(usuarioStorage));
                } else {
                    localStorage.setItem('usuarioGoogle', JSON.stringify(usuarioStorage));
                }

            } else {
                usuarioStorage.name = resp.data.name;
                usuarioStorage.lastname = resp.data.lastname;
                usuarioStorage.telephone = resp.data.telephone;
                usuarioStorage.email = resp.data.email;
                usuarioStorage.address = resp.data.address;

                if (JSON.parse( localStorage.getItem('usuario') )) {

                    localStorage.setItem('usuario', JSON.stringify(usuarioStorage));
                } else {
                    localStorage.setItem('usuarioGoogle', JSON.stringify(usuarioStorage));
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const getFacturasByMes = (mes) => {
    return async (dispatch) => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/ganancias/${mes}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await rs.json();
        dispatch(facturasByMes({mes, data}))
    }
}

export const getAllFacturas = () => {
    return async (dispatch) => {
        const rs = await fetch(`${process.env.REACT_APP_API}/api/Factura/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await rs.json();
        dispatch(allFacturas(data))
    }
}