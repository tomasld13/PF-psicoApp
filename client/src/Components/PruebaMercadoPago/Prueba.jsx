import React from 'react'
import { useEffect, useState } from 'react'
import Checkout from './Checkout.jsx'
import axios from 'axios'

export default function Prueba({idpsycho}) {
    const [data, setData] = useState('')
    return (
        <> 
            <Checkout idpsycho={idpsycho}/> 
        </>
    )
}
