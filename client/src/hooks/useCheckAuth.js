import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from "../firebase/config";
import { loginGoogle, logoutGoogle  } from "../slice/auth/authSlice.js";


export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth.authGoogle);
    const dispatch = useDispatch();
    const usuarioStorage = JSON.parse( localStorage.getItem('usuarioGoogle') ) ? JSON.parse( localStorage.getItem('usuarioGoogle') ) : null;
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {

            if( !usuarioStorage ) return dispatch(logoutGoogle());
            const {photoURL} = user;
            usuarioStorage.photo = photoURL;
            dispatch(loginGoogle(usuarioStorage));
        });

    }, []);

    return status
}
