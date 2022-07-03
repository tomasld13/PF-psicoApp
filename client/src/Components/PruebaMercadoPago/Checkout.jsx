import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postMP } from '../../slice/psico/thunks.js';

export default function Checkout() {
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const [response , setResponse] = useState("");

    const { rolId } = useSelector(state => state.auth.authBack);

    const dispatch = useDispatch();

    const { pychoId } = useSelector(state => state.psicology)
    const {id} = useSelector(state=>state.auth.authBack)
    const linkPago = useSelector (state=>state.psicology.initPoint.id)
    // console.log(id, "ID del paciente")
    // console.log(linkPago);
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
        <div>
            <form>
                <h4>Checkout</h4>
                <select onChange={e=> handleOnChange(e)}>
                <option selected disabled>Seleccione un servicio</option>
                {pychoId ? pychoId.servicios?.map((item, index) => {
                    {/* console.log("Hola perro")
                    console.log(item.servicio)
                    console.log(item.precios[0].costo) */}
                    {return (     
                            <option value={`${item.servicio},${item.precios[0].costo}`}>{`${item.servicio} $${item.precios[0].costo}`}</option>
                    )}
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
            { linkPago ? <button><a href={`${linkPago}`}> Confirmar </a></button>: null }
        </div>
    )
}
