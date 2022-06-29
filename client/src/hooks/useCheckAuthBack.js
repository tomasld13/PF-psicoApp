import { useDispatch, useSelector } from "react-redux";
import { loginBack, logoutBack } from "../slice/auth/authSlice";

export const useCheckAuthBack = () => {
    const storeAuthBack = useSelector(state => state.auth.authBack);
    const pacienteStorage = (localStorage.getItem('paciente')) ? JSON.parse( localStorage.getItem('paciente') ) : {};
    
    const dispatch = useDispatch();
        if( !pacienteStorage.name ) return dispatch(logoutBack()); 

        dispatch(loginBack(pacienteStorage));

    return storeAuthBack;
}
