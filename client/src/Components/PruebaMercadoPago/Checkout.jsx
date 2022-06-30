import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Checkout() {
    const { pychoId } = useSelector(state => state.psicology)
    console.log(pychoId, "here puto")
    return (
        <div>
            <form>
                <h4>Checkout</h4>
                {pychoId ? pychoId.map((item, index) => {
                    console.log(item.servicios)
                    return (
                        <div key={item.id}>
                            <p>{item.servicios[index]?.servicio}</p>
                            <p>{item.servicios[index]?.precios.costo}</p>
                        </div>
                    )
                }): null}
            </form>
        </div>
    )
}
