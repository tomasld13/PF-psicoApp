import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from "../firebase/config";
import { login, logout, logoutGoogle, loginGoogle } from "../slice/auth/authSlice";

export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth.authGoogle);
    const dispatch = useDispatch();
    const usuarioStorage = (localStorage.getItem('usuarioGoogle')) ? JSON.parse( localStorage.getItem('usuarioGoogle') ) : {};
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {

        if( !user ){
            dispatch(logoutGoogle());
            return dispatch(logout());
        }
        // dispatch(logoutGoogle());
        const {photoURL} = user;
        usuarioStorage.photo = photoURL
        dispatch(loginGoogle(usuarioStorage));

        });

    }, []);

    return status
}
