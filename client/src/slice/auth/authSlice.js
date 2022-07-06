import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authFirebase: {
            status: 'checking',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null,
        },
        authBack: {
            status: 'checking',
            id: null,
            name: null,
            lastname: null,
            email: null,
            telephone: null,
            address: null,
            birth: null,
            rolId: null,
            generoId: null,
            ciudadId: null,
            error: null,
            token: null
        },
        error: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.authFirebase.status = 'authenticated'
            state.authFirebase.uid = payload.uid;
            state.authFirebase.email = payload.email;
            state.authFirebase.displayName = payload.displayName;
            state.authFirebase.photoURL = payload.photoURL;
            state.authFirebase.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.authFirebase.status = 'no-authenticated'
            state.authFirebase.uid = null;
            state.authFirebase.email = null;
            state.authFirebase.displayName = null;
            state.authFirebase.photoURL = null;
            state.authFirebase.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.authFirebase.status = 'checking';
            state.authBack.status = 'checking';
        },
        loginBack: (state, {payload}) => {
            state.authBack.status = 'authenticated';
            state.authBack.id = payload.user ? payload.user.id : payload.id;
            state.authBack.name = payload.user ? payload.user.name : payload.name;
            state.authBack.lastname = payload.user ? payload.user.lastname : payload.lastname;
            state.authBack.email = payload.user ? payload.user.email : payload.email;
            state.authBack.telephone = payload.user ? payload.user.telephone : payload.telephone;
            state.authBack.address = payload.user ? payload.user.address : payload.address;
            state.authBack.birth = payload.user ? payload.user.birth : payload.birth;
            state.authBack.rolId = payload.user ? payload.user.rolId : payload.rolId;
            state.authBack.generoId = payload.user ? payload.user.generoId : payload.generoId;
            state.authBack.ciudadId = payload.user ? payload.user.ciudadId : payload.ciudadId;
            state.authBack.token = payload.user ? payload.token : null; 
        },
        logoutBack: (state, {payload}) => {
            state.authBack.status = 'no-authenticated';
            state.authBack.id = null;
            state.authBack.name = null;
            state.authBack.lastname = null;
            state.authBack.email = null;
            state.authBack.telephone = null;
            state.authBack.address = null;
            state.authBack.birth = null;
            state.authBack.rolId = null;
            state.authBack.generoId = null;
            state.authBack.ciudadId = null;
            state.authBack.token = null;
        },
        errorRegisterBack: (state, {payload}) => {
            state.error = payload;
        }
    }
});

export const {login, logout, checkingCredentials, loginBack, logoutBack, errorRegisterBack} = authSlice.actions; 