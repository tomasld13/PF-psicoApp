import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
import { getPsychologyID } from "../../slice/psico/thunks";
//import Pricing from "../Pricing/Pricing.jsx"
import Loading from '../Loading/Loading'
import Main from "./Details/Main.jsx";
//import Checkout from '../PruebaMercadoPago/Checkout'

export default function PsicoDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const { pychoId  } = useSelector(state => state.psicology)

    useEffect(() => {
      dispatch(getPsychologyID(params.id));
    }, [dispatch,params.id]);

    console.log(Boolean(pychoId))
    console.log(typeof(pychoId))
    console.log(pychoId)
    console.log(typeof(pychoId), "despues")
    return (
    <>{
        (pychoId.hasOwnProperty("id"))? <>  
        <div className="mt-40">
            <Main/> 
            <div className="container w-1/2">
                <div className="container h-80 bg-red">Calendario</div>
                <div className="container bg-blue"></div>
                <button className="bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-9">Agendar cita</button>
                {/*<Checkout/> */}
            </div>
        </div>
        </>
        : <Loading/>
    }</>);
};