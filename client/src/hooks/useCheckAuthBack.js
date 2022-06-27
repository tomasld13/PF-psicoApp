import { useDispatch, useSelector } from "react-redux";
import { loginBack, logoutBack } from "../slice/auth/authSlice";

export const useCheckAuthBack = () => {
    const storeAuthBack = useSelector(state => state.auth.authBack);
    const dispatch = useDispatch();
        if( !storeAuthBack.name ) return dispatch(logoutBack());

        dispatch(loginBack([storeAuthBack]));

    return storeAuthBack;
}
