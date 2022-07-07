import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
import { getPsychologyID } from "../../slice/psico/thunks";
import { Calendar } from "../Calendar/Calendar";
//import Pricing from "../Pricing/Pricing.jsx"
import Loading from '../Loading/Loading'
import Main from "./Details/Main.jsx";
import Prueba from "../PruebaMercadoPago/Prueba";
//import Checkout from '../PruebaMercadoPago/Checkout'

export default function PsicoDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { pychoId  } = useSelector(state => state.psicology)

    useEffect(() => {
        dispatch(getPsychologyID(id));
    }, []);

    return (
    <>{
        (pychoId.hasOwnProperty("id"))? <>  
        <div className="mt-40">
            <Main/> 
        </div>
        </>
        : <Loading/>
    }</>);
};