import { useMemo, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from '../../slice/auth/thunks.js';
import Nav from "../Nav/Nav.jsx"

/*"{
    ""name"": ""jhoskar"", 
    ""lastname"": ""toro"", 
    ""email"": ""jhoskartoro@gmail.com"", 
    ""telephone"": 123213, 
    ""address"":""ajax"", 
    ""birth"":""123212"", // 1994-09-20 /940920
    ""rol"": ""Psicologo"", // "Paciente"
    ""gener"": ""No Binario"", // "Masculino" // "Femenino"
    ""ciudad"": ""Lafinur""
}"*/
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formData = {
    email: '',
    password: '',
    displayName: '',
    lastName: '',
    telephone: '',
    address: '',
    birth: '',
    rol:'',
    gener: '',
    city: '',
}

const formValidations = {
    email: [ (value) => emailRegex.test(value), 'El correo no es valido'],
    password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
    lastName: [ (value) => value.length >= 1, 'El apellido es obligatorio'],
    telephone: [ (value) => value.length >= 1, 'El numero de telefono es obligatorio'],
    address: [ (value) => value.length >= 1, 'La dirección es obligatorio'],
    birth: [ (value) => value.length >= 1, 'La fecha de nacimiento es obligatorio'],
    rol: [ (value) => value !== "0", 'El rol es obligatorio'],
    gener: [ (value) => value !== "0", 'El genero es obligatorio'],
    city: [ (value) => value.length >= 1, 'La ciudad es obligatoria'],
}

export default function Register() {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { displayName, email, password, onInputChange, formState,
            isFormValid, displayNameValid, emailValid, passwordValid, lastName, lastNameValid,
            telephone, telephoneValid, address, addressValid, birth, birthValid, rol, rolValid,
            gener, generValid, city, cityValid} = useForm(formData, formValidations);


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
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Nombre" name="displayName" value={displayName} onChange={onInputChange}/>
                    {!!displayNameValid && formSubmitted ? <span style={{color:'red'}}>{displayNameValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Apellido" name="lastName" value={lastName} onChange={onInputChange}/>
                    {!!displayNameValid && formSubmitted ? <span style={{color:'red'}}>{lastNameValid}</span> : null}
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
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="number" placeholder="Número de Telefono" name="telephone" value={telephone} onChange={onInputChange}/>
                    {!!telephoneValid && formSubmitted ? <span style={{color:'red'}}>{telephoneValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Dirección" name="address" value={address} onChange={onInputChange}/>
                    {!!addressValid && formSubmitted ? <span style={{color:'red'}}>{addressValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="date"  name="birth" value={birth} onChange={onInputChange}/>
                    {!!birthValid && formSubmitted ? <span style={{color:'red'}}>{birthValid}</span> : null}
                </div>

                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="gener" id="gener"  onChange={onInputChange}>
                        <option  selected value="0"> Genero </option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="No binario">No binario</option>
                    </select>
                    {!!generValid && formSubmitted ? <span style={{color:'red'}}>{generValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="rol" id="rol"  onChange={onInputChange}>
                        <option  selected value="0"> Rol </option>
                        <option value="Psicologo">Psicologo</option>
                        <option value="Paciente">Paciente</option>
                    </select>
                    {!!rolValid && formSubmitted ? <span style={{color:'red'}}>{rolValid}</span> : null}
                </div>



                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Ciudad"  name="city" value={city} onChange={onInputChange}/>
                    {!!cityValid && formSubmitted ? <span style={{color:'red'}}>{cityValid}</span> : null}
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