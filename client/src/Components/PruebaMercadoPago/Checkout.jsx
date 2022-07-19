import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postMP } from '../../slice/psico/thunks.js';
import { Grid, } from '@chakra-ui/react' 
import { Calendar } from '../Calendar/Calendar.jsx';
import Pricing from '../Pricing/Pricing.jsx'
import { useParams } from 'react-router-dom';

export default function Checkout({idpsycho}) {
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const params = useParams();
    const { rolId } = useSelector(state => state.auth.authBack);
    const google = useSelector(state => state.auth.authGoogle.rolId);
    const {date, time} = useSelector(state => state.psicology.calendar);
    //console.log(date,time, "hola")

    const dispatch = useDispatch();

    const { pychoId } = useSelector(state => state.psicology)
    const {id} = useSelector(state=>state.auth.authBack)
    const linkPago = useSelector (state=>state.psicology.initPoint.id)


    return (
        <>
            <div className='bg-secundary'>
                <Calendar idPsycho={id}/>
            </div>
            <Pricing idpsycho={params}/>
            { rolId || google ? 
                (<div>
                    { linkPago ? <button className='h-10  my-8 py-2.5 px-8 bg-green-500 rounder text-white font-bold'><a href={`${linkPago}`}> Confirmar </a></button>: null }
                </div>)
                : (<Link to='/auth/login'>
                    { linkPago ? <button className='h-10  my-8 py-2.5 px-8 bg-green-500 rounder text-white font-bold'><a> Confirmar </a></button>: null }
                </Link>)
            }
        </>
    )
}
