import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postMP } from '../../slice/psico/thunks.js';
import { Grid, } from '@chakra-ui/react' 
import { Calendar } from '../Calendar/Calendar.jsx';
import Pricing from '../Pricing/Pricing.jsx'

export default function Checkout({idpsycho}) {
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");

    const { rolId } = useSelector(state => state.auth.authBack);
    const {date, time} = useSelector(state => state.psicology.calendar);
    //console.log(date,time, "hola")

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
        dispatch(postMP({
            id: id,
            servicio: service,
            precio: Number(price),
            hora: time,
            fecha: date,
            psicoId: idpsycho
        }));
    }

    return (
        <>
            <div className='bg-primary'>
                <Calendar/>
            </div>
            {/* <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={6}
            >

                <div>
                    <form className='container flex flex-col'>
                        <h4>Checkout</h4>
                        <select className='my-2' onChange={e=> handleOnChange(e)}>
                        <option selected disabled>Seleccione un servicio</option>
                        {pychoId ? pychoId.servicios?.map((item, index) => {
                            return (     
                                    <option value={`${item.servicio},${item.precios[0].costo}`}>{`${item.servicio} $${item.precios[0].costo}`}</option>
                            )
                        }
                        
                        ): <></>}
                        </select>
                        {
                    rolId ? (
                        <button className='h-10 py-2.5 bg-primary text-white font-bold' onClick={e=>{handleOnClick(e)}}>Hacer Pago</button>
                    ) : (
                        <Link to='/auth/login'>
                            <button className='h-10 py-2.5 bg-primary text-white font-bold'>Hacer Pago</button>
                        </Link>
                    )
                }
                    </form>
                    { linkPago ? <button className='h-10 py-2.5 bg-green text-white font-bold'><a href={`${linkPago}`}> Confirmar </a></button>: null }
                </div>
            

            </Grid> */}
            <Pricing idpsycho={id}/>
            <div>
                { linkPago ? <button className='h-10  my-8 py-2.5 px-8 bg-green-500 rounder text-white font-bold'><a href={`${linkPago}`}> Confirmar </a></button>: null }
            </div>
        </>
    )
}
