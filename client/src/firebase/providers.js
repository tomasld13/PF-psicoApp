import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config.js';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async (email, password) => {

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {displayName, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {
        
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}