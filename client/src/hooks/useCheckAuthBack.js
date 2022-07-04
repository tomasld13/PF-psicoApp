import { useDispatch, useSelector } from "react-redux";
import { loginBack, logoutBack } from "../slice/auth/authSlice";

export const useCheckAuthBack = () => {
    const storeAuthBack = useSelector(state => state.auth.authBack);
    const pacienteStorage = (localStorage.getItem('usuario')) ? JSON.parse( localStorage.getItem('usuario') ) : {};
    
    const dispatch = useDispatch();
        if( !pacienteStorage.user?.name && !pacienteStorage.name) return dispatch(logoutBack()); 

        dispatch(loginBack(pacienteStorage));

    return storeAuthBack;
}
