import React from 'react'
import { useEffect, useState } from 'react'
import Checkout from './Checkout.jsx'
import axios from 'axios'

export default function Prueba() {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3001/api/mercadopago')
            .then(res => {
                setData(res.data)
                console.log('contenido de la data: ', data)
            }).catch(err => {
                console.log(err)
            }
            )
    },[])
    const item = [
        {servicio: 'Sesion personal', precio: 1500},
    ]
    return (
        <div>
            { !data ? <p> cargando... </p>
            : <Checkout servicio={item} data={data}/>

            }
        </div>
    )
}
