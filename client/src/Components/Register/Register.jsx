import { useState } from "react";
import Nav from "../Nav/Nav.jsx"
import { RegisterPatient } from "../RegisterPatient/RegisterPatient";
import { RegisterPsycho } from "../RegisterPsycho/RegisterPsycho.jsx";


export default function Register() {

    const [rol, setRol] = useState();

    const onChange = (e) => {
        setRol(e.target.value);
    }

    return (
    <>
        <div className="container mx-auto mt-auto bg-secundary rounded">
            <h1 className="text-3xl py-5">Crear cuenta</h1>
            <div>
                <div className="flex flex-col content-center items-center">
                    <select className='border border-gray-300 my-2.5 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-primary' name="rol" id="rol" onChange={onChange}>
                        <option  selected disabled value=""> Rol </option>
                        <option value="Psicologo">Psicologo</option>
                        <option value="Paciente">Paciente</option>
                    </select>
                </div>
                {
                    rol === 'Paciente' ? <RegisterPatient rol={rol} /> 
                    : rol === 'Psicologo' ? <RegisterPsycho rol={rol} /> : null 
                }
                <div className="mt-2 pb-5">
                    <p>
                    ¿Ya tienes cuenta?<a href='/auth/login' className="hover:text-primary"> Ingresar</a>
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}