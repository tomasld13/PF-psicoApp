import { useMemo, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from '../../slice/auth/thunks.js';

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
            <h1>Crear cuenta</h1>
            <form onSubmit={onSubmit}>
                <div>
                    {!!displayNameValid && formSubmitted ? <span style={{color:'red'}}>{displayNameValid}</span> : null}
                    <input type="text" placeholder="Nombre completo" name="displayName" value={displayName} onChange={onInputChange}/>
                </div>
                <div>
                    {!!emailValid && formSubmitted ? <span style={{color:'red'}}>{emailValid}</span> : null}
                    <input type="email" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
                </div>
                
                <div>
                    {!!passwordValid && formSubmitted ? <span style={{color:'red'}}>{passwordValid}</span> : null}
                    <input type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>
                </div>
                <div>
                    {!!errorMessage ? <span style={{color:'red'}}>{errorMessage}</span> : null}
                    <button disabled={isCheckingAuthentication}>Crear cuenta</button>
                </div>
                <div>
                    ¿Ya tienes cuenta?
                    <Link to='/auth/login'>
                        Ingresar
                    </Link>
                </div>
            </form>
        </>
    );
}
