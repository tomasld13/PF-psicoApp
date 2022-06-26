import { useMemo, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from '../../slice/auth/thunks.js';
import Nav from "../Nav/Nav.jsx"

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [ (value) => emailRegex.test(value), 'El correo no es valido'],
    password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}

export default function Register() {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { displayName, email, password, onInputChange, formState,
            isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);


    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid) return;

        dispatch( startCreatingUserWithEmailPassword(formState) );
    }

    return (
    <>
        <Nav/>
        <div className="container mx-auto mt-auto bg-secundary rounded">
            <h1 className="text-3xl py-5">Crear cuenta</h1>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Nombre completo" name="displayName" value={displayName} onChange={onInputChange}/>
                    {!!displayNameValid && formSubmitted ? <span style={{color:'red'}}>{displayNameValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="email" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
                    {!!emailValid && formSubmitted ? <span style={{color:'red'}}>{emailValid}</span> : null}
                </div>
                
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>
                    {!!passwordValid && formSubmitted ? <span style={{color:'red'}}>{passwordValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-12 ' disabled={isCheckingAuthentication}>Crear cuenta</button>
                    {!!errorMessage ? <span style={{color:'red'}}>{errorMessage}</span> : null}
                </div>
                <div className="mt-2 pb-5">
                    <p>
                    ¿Ya tienes cuenta?<a href='/auth/login' className="hover:text-primary" > Ingresar</a>
                    </p>
                </div>
            </form>
        </div>
    </>
    );
}
