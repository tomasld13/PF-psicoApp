import React from 'react'
import { useEffect } from 'react'

export default function Checkout({servicio, data}) {
    return (
        <div>
            <form id='form1'>
                <h4>Checkout</h4>
                <div>
                    {servicio.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.servicio}</p>
                                <p>{'$' + item.precio}</p>
                                <button><a href="https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=1150565020-6a969fa2-0e4a-44ce-9e17-20cb7dea3590">pagar</a></button>
                            </div>    
                        )
                    })}
                </div>

            </form>
        </div>
    )
}
