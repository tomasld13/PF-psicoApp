import { useDispatch, useSelector } from "react-redux";
import { loginBack, logoutBack } from "../slice/auth/authSlice";

export const useCheckAuthBack = () => {
    const storeAuthBack = useSelector(state => state.auth.authBack);
    const pacienteStorage = JSON.parse( localStorage.getItem('usuario') ) ? JSON.parse( localStorage.getItem('usuario') ) : null;
    
    const dispatch = useDispatch();
        if( !pacienteStorage ) return dispatch(logoutBack()); 

        dispatch(loginBack(pacienteStorage));

    return storeAuthBack;
}
