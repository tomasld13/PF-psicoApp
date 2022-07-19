import { useContext, useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from "../../context/authContext/AuthContext";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPasswordPatient, startLogout } from '../../slice/auth/thunks.js';
import { getProvincias, getCiudades, cleanCiudades } from '../../slice/psico/thunks.js';

const formData = {
    email: '',
    password: '',
    name: '',
    lastname: '',
    telephone: '',
    address: '',
    birth: '',
    rol:'',
    gener: '',
    ciudad: '',
    provincia: ''
}

const formValidations = {
    telephone: [ (value) => value.length >= 1, 'El numero de telefono es obligatorio'],
    address: [ (value) => value.length >= 1, 'La dirección es obligatorio'],
    birth: [ (value) => value.length >= 1, 'La fecha de nacimiento es obligatorio'],
    gener: [ (value) => value !== "0" && value, 'El genero es obligatorio'],
    ciudad: [ (value) => value !== "0" && value, 'La ciudad es obligatoria'],
    provincia: [ (value) => value !== "0" && value, 'La provincia es obligatoria'],
}

export const RegisterGoogle = () => {
    
    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [idProvincia, setIdProvincia] = useState(0);

    const { name, email, uid, photoURL} = useSelector(state => state.auth.authGoogle);
    const errorRegister = useSelector(state => state.auth.error);
    const provincias = useSelector(state => state.psicology.provincias);
    const ciudades = useSelector(state => state.psicology.ciudades);

    const { login } = useContext( AuthContext );

    formData.rol = 'Paciente';
    formData.email = email;
    if (name) {
        formData.name = name.split(' ')[0];
        formData.lastname = name.split(' ')[1];
    }
    formData.password = uid;
    formData.photo = photoURL;

    const { onInputChange, formState,isFormValid,telephone, telephoneValid, address, addressValid,
            birth, birthValid, generValid, ciudadValid, provinciaValid} = useForm(formData, formValidations);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if(!isFormValid) return;
        formState.google = true;
        dispatch(startCreatingUserWithEmailPasswordPatient(formState) );
        await login(formState.email, formState.password);
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
                        <option value="Otro">Otro</option>
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
                    <button 
                    className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-12 ' 
                    >Completar Registro!</button>
                    {errorRegister ? <span style={{color:'red'}}>{errorRegister}</span> : null}
                </div>
            </form>
                <div className="flex flex-col content-center items-center">
                    <button
                    className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-12 '
                    onClick={() => dispatch(startLogout())}
                    >
                    Cancelar Registro
                    </button>
                </div>
        </div>
    );
}
