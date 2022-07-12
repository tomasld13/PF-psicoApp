import React, { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    id: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};


export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState(initialState)

    const login = async( email, password ) => {

        const resp = await fetchSinToken('auth/login', { email, password }, 'POST');
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { user } = resp;

            setAuth({
                id: user.id,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email,
            });

        }

        return resp.ok;

    }


    const verificaToken = useCallback( async() => {

        const token = localStorage.getItem('token');
        // Si token no existe
        if ( !token ) {
            setAuth({
                id: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            })

            return false;
        }

        const resp = await fetchConToken('auth/renew');
        if ( resp.ok ) {
            
            localStorage.setItem('token', resp.token );
            const { user } = resp;

            setAuth({
                id: user.id,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email,
            });

            return true;
        } else {
            setAuth({
                id: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }

    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false,
        });
    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            
            verificaToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

