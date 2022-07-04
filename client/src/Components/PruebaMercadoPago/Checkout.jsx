import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postMP } from '../../slice/psico/thunks.js';
import { Grid, } from '@chakra-ui/react' 

export default function Checkout() {
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const [response , setResponse] = useState("");
    const dispatch = useDispatch();

    const { pychoId } = useSelector(state => state.psicology)
    const {id} = useSelector(state=>state.auth.authBack)
    const linkPago = useSelector (state=>state.psicology.initPoint.id)
    useEffect(()=>{      
    }, [])

    function handleOnChange(e) {
        e.preventDefault()
        const [servicio, precio] = e.target.value.split(",")
        setService(servicio);
        setPrice(precio);
    }

    function handleOnClick(e){
        e.preventDefault();
        //console.log(service," ", Number(price))
        setResponse(dispatch(postMP({
            id: id,
            servicio: service,
            precio: Number(price),
            hora: "14:30:10",
            fecha: "2020-05-05",
        })))
    }

    return (
        <>
            <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={6}
            >
                <div className='h-80 bg-primary'>
                    Calendario
                </div>

                <div>
                    <form className='container flex flex-col'>
                        <h4>Checkout</h4>
                        <select className='my-2' onChange={e=> handleOnChange(e)}>
                        <option selected disabled>Seleccione un servicio</option>
                        {pychoId ? pychoId.servicios?.map((item, index) => {
                            {return (     
                                    <option value={`${item.servicio},${item.precios[0].costo}`}>{`${item.servicio} $${item.precios[0].costo}`}</option>
                            )}
                        }
                        
                        ): <></>}
                        </select>
                        <button className='h-10 py-2.5 bg-primary text-white font-bold' onClick={e=>{handleOnClick(e)}}>Hacer Pago</button>
                    </form>
                    { linkPago ? <button className='h-10 py-2.5 bg-green text-white font-bold'><a href={`${linkPago}`}> Confirmar </a></button>: null }
                </div>
            

            </Grid>
            <div>
                { linkPago ? <button className='h-10  my-8 py-2.5 px-8 bg-green-500 rounder text-white font-bold'><a href={`${linkPago}`}> Confirmar </a></button>: null }
            </div>
        </>
    )
}
