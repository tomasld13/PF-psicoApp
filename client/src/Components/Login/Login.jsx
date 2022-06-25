import { useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../slice/auth/thunks.js';

export default function Login() {

    const {status, errorMessage} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, isFormValid, emailValid } = useForm({
        email: '',
        password: ''
    });
    
    //Este componente memoriza el valor que retorna la funcion y se vuelve a evaluar cada vez que el valor status cambia
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handlerSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailPassword(email, password));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handlerSubmit}>
                <div>
                    <input type="email" placeholder="Correo" name="email" value={email} onChange={onInputChange}/>
                </div>
                <input type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>
                <div>
                    {!!errorMessage ? <span style={{color:'red'}}>{errorMessage}</span> : null}
                    <button disabled={isAuthenticating}>Login</button>
                    <button onClick={onGoogleSignIn} disabled={isAuthenticating}>Google</button>
                </div>
                <Link to='/auth/register'>
                    Crear una cuenta
                </Link>
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                </div>
            </form>
        </>
    );
}
