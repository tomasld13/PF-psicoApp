import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { postServiciosPsicologo } from "../../../../slice/psico/thunks"


export default function Servicio() {
    const dispatch = useDispatch()
    const [servicio, setServicio] = useState('')
    const [precio, setPrecio] = useState(0)
    console.log(servicio, "SERVICIO")
    console.log(precio, "PRECIO")
    const idUser = useSelector(state => state.auth.authBack.id)
    const handleInputChange = (e) => {
        if(e.target.name === 'Servicio'){
            setServicio(e.target.value)
        }else{
            setPrecio(e.target.value)
        }
    }
    return (
        <div className="container w-full h-full m-0">
            <div className='flex flex-col w-56 container m-0 '>
                <select name="Servicio" onChange={(e) => handleInputChange(e)}>
                    <option selected disabled value="">Seleccione un servicio</option>
                    <option value="Sesion personal">Sesion personal</option>
                    <option value="Sesion de pareja">Sesion de pareja</option>
                    <option value="Sesion de grupo">Sesion de grupo</option>
                    <option value="Sesion infantil">Sesion infantil</option>
                    <option value="Sesion de trabajo">Sesion de trabajo</option>
                </select>
                &nbsp;
                <input type="number" name="precio" onChange={(e) => handleInputChange(e)} />
                <button className='bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 mx-2.5 h-20' onClick={() => {
                    dispatch(postServiciosPsicologo(idUser, {servicio, precio}))
                }}>Añadir servicio y precio</button>
            </div>
        </div>
        
    )
}
