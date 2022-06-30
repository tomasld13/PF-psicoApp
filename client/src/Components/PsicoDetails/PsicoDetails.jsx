import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
import { getPsychologyID } from "../../slice/psico/thunks";
import Prueba from "../PruebaMercadoPago/Prueba";

export default function PsicoDetails() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPsychologyID(params.id));
    }, []);
    return (
        <div className="container flex ">
            <div className="container w-1/2 h-60 bg-secundary border border-primary my-5 mx-10">
                <div>Info</div>
            </div>
            <div className="container w-1/2">
                <div className="container h-80 bg-red">Calendario</div>
                <div className="container h-80 bg-blue">Servicios</div>
                <button className="bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-9">Agendar cita</button>
                <Prueba />
            </div>
        </div>
    );
};