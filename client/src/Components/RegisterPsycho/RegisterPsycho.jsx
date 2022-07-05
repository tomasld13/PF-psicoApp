import { useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPasswordPsycho } from '../../slice/auth/thunks.js';
import { getProvincias, getCiudades, cleanCiudades } from '../../slice/psico/thunks.js';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formData = {
    name: '',
    lastname: '',
    email: '',
    telephone: '',
    address: '',
    birth: '',
    rol:'',
    gener: '',
    ciudad: '',
    provincia: '',
    yearsExperience: '',
    especialidad: '',
    password: '',
    inicioHorario: '',
    finHorario: '',
    intervaloSesion: ''
}

const formValidations = {
    name: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
    lastname: [ (value) => value.length >= 1, 'El apellido es obligatorio'],
    email: [ (value) => emailRegex.test(value), 'El correo no es valido'],
    telephone: [ (value) => value.length >= 1, 'El numero de telefono es obligatorio'],
    address: [ (value) => value.length >= 1, 'La dirección es obligatorio'],
    birth: [ (value) => value.length >= 1, 'La fecha de nacimiento es obligatorio'],
    gener: [ (value) => value !== "0" && value, 'El genero es obligatorio'],
    ciudad: [ (value) => value !== "0" && value, 'La ciudad es obligatoria'],
    provincia: [ (value) => value !== "0" && value, 'La provincia es obligatoria'],
    password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
    yearsExperience: [(value) => (value*1) > 0, 'Experiencia no valida'],
    especialidad: [(value) => value !== '0' && value, 'La especialidad es obligatoria'],
    inicioHorario: [(value) => value !== '0' && value, 'Debe elegir un horario inicial'],
    finHorario: [(value) => value !== '0' && value, 'Debe elegit un horario final'],
    intervaloSesion: [(value) => (value*1) >= 30, 'La sesion minima es de 30 minutos'],
}


export const RegisterPsycho = ({rol}) => {

    formData.rol = rol;

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [idProvincia, setIdProvincia] = useState(0);

    const { status } = useSelector(state => state.auth.authBack);
    const errorRegister = useSelector(state => state.auth.error);
    const provincias = useSelector(state => state.psicology.provincias);
    const ciudades = useSelector(state => state.psicology.ciudades);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


    const { name, email, password, onInputChange, formState,
            isFormValid, nameValid, emailValid, passwordValid, lastname, lastnameValid,
            telephone, telephoneValid, address, addressValid, birth, birthValid,
            generValid, ciudadValid, provinciaValid, yearsExperience, yearsExperienceValid,
            especialidadValid, inicioHorarioValid,finHorarioValid, intervaloSesion,
            intervaloSesionValid} = useForm(formData, formValidations);


    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid) return;

        dispatch( startCreatingUserWithEmailPasswordPsycho(formState) );

    }

    useEffect(() => {
        dispatch(getProvincias());
    }, []);
    
    const validarProvincia = (e) => {
        dispatch(cleanCiudades());
        setIdProvincia(e.target.value);

        if (e.target.value === '0') return;
        dispatch(getCiudades(e.target.value));
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Nombre" name="name" value={name} onChange={onInputChange}/>
                    {!!nameValid && formSubmitted ? <span style={{color:'red'}}>{nameValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Apellido" name="lastname" value={lastname} onChange={onInputChange}/>
                    {!!lastnameValid && formSubmitted ? <span style={{color:'red'}}>{lastnameValid}</span> : null}
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
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="provincia" id="provincia"  onChange={(e) => {
                        validarProvincia(e);
                        onInputChange(e);
                    }}>
                        <option  selected value="0">Provincia</option>
                        {
                            provincias.length > 0 ? provincias.map((provincia) => {
                                return <option value={provincia.id} key={provincia.id}>
                                            {provincia.name}</option>
                            }) : null
                        }
                    </select>
                    {!!provinciaValid && formSubmitted ? <span style={{color:'red'}}>{provinciaValid}</span> : null}
                </div>
                {
                    idProvincia != 0 ? <div className="flex flex-col content-center items-center">
                        <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="ciudad" id="ciudad" onChange={onInputChange}>
                            <option  selected value="0">Ciudad</option>
                            {
                                ciudades.length > 0 ? ciudades.map((ciudad) => {
                                    return <option value={ciudad.name} key={ciudad.id}>
                                                {ciudad.name}</option>
                                }) : null
                            }
                        </select>
                        {!!ciudadValid && formSubmitted ? <span style={{color:'red'}}>{ciudadValid}</span> : null}
                    </div>
                    : null
                }
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Años de experiencia"  name="yearsExperience" value={yearsExperience} onChange={onInputChange}/>
                    {!!yearsExperienceValid && formSubmitted ? <span style={{color:'red'}}>{yearsExperienceValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="especialidad" id="especialidad"  onChange={onInputChange}>
                        <option  selected value="0"> Especialidad </option>
                        <option value="Psicologia Clinica">Psicologia Clinica</option>
                        <option value="Psicologia Educacional">Psicologia Educacional</option>
                        <option value="Psicologia Deportiva">Psicologia Deportiva</option>
                        <option value="Psicologia Forense">Psicologia Forense</option>
                        <option value="Psicologia Organizacional">Psicologia Organizacional</option>
                    </select>
                    {!!especialidadValid && formSubmitted ? <span style={{color:'red'}}>{especialidadValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="inicioHorario" id="inicioHorario"  onChange={onInputChange}>
                        <option  selected value="0"> Inicio horario de trabajo </option>
                        <option value="08:00:00">8:00 AM</option>
                        <option value="09:00:00">9:00 AM</option>
                        <option value="10:00:00">10:00 AM</option>
                        <option value="11:00:00">11:00 AM</option>
                        <option value="13:00:00">13:00 PM</option>
                        <option value="14:00:00">14:00 PM</option>
                        <option value="15:00:00">15:00 PM</option>
                        <option value="16:00:00">16:00 PM</option>
                    </select>
                    {!!inicioHorarioValid && formSubmitted ? <span style={{color:'red'}}>{inicioHorarioValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="finHorario" id="finHorario"  onChange={onInputChange}>
                        <option  selected value="0"> Fin horario de trabajo </option>
                        <option value="10:00:00">10:00 AM</option>
                        <option value="11:00:00">11:00 AM</option>
                        <option value="13:00:00">13:00 PM</option>
                        <option value="14:00:00">14:00 PM</option>
                        <option value="15:00:00">15:00 PM</option>
                        <option value="16:00:00">16:00 PM</option>
                        <option value="17:00:00">17:00 PM</option>
                        <option value="18:00:00">18:00 PM</option>
                    </select>
                    {!!finHorarioValid && formSubmitted ? <span style={{color:'red'}}>{finHorarioValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <input className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' type="text" placeholder="Intervalo de la sesión"  name="intervaloSesion" value={intervaloSesion} onChange={onInputChange}/>
                    {!!intervaloSesionValid && formSubmitted ? <span style={{color:'red'}}>{intervaloSesionValid}</span> : null}
                </div>
                <div className="flex flex-col content-center items-center">
                    <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-12 ' disabled={isCheckingAuthentication}>Crear cuenta</button>
                    {errorRegister ? <span style={{color:'red'}}>{errorRegister}</span> : null}
                </div>
            </form>
    </div>
  )
}
