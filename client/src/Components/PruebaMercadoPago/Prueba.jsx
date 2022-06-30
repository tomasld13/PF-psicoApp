import React from 'react'
import { useEffect, useState } from 'react'
import Checkout from './Checkout.jsx'
import axios from 'axios'

export default function Prueba() {
    const [data, setData] = useState('')
    return (
        <div> 
            <Checkout /> 
        </div>
    )
}
