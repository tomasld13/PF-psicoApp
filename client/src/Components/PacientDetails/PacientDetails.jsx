import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
import { getPacientID } from "../../slice/psico/thunks";
import Loading from '../Loading/Loading'
import Main from "./Details/Main.jsx";



export default function PsicoDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { pacientId  } = useSelector(state => state.psicology)

    useEffect(() => {
        dispatch(getPacientID(id));
    },[]);

    return (
    <>{
        (pacientId.hasOwnProperty("id"))? <>  
        <div className="mt-40">
            <Main/> 
        </div>
        </>
        : <Loading/>
    }</>);
};