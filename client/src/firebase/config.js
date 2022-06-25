// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const {REACT_APP_FIREBASE_KEY, REACT_APP_FIREBASE_DOMAIN, REACT_APP_FIREBASE_APPID} = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV6dE3Rhul8J7J8UoTSsXniW2GMofaARQ",
    authDomain: "auth-psico-app.firebaseapp.com",
    projectId: "auth-psico-app",
    storageBucket: "auth-psico-app.appspot.com",
    messagingSenderId: "109928611512",
    appId: "1:109928611512:web:7e0dab4d4371f88755be4d",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);