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
            errorMessage: null,
        }
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
            state.authBack.id = payload[0] ? payload[0].id : 2;
            state.authBack.name = payload[0].name;
            state.authBack.lastname = payload[0].lastname;
            state.authBack.email = payload[0].email;
            state.authBack.telephone = payload[0].telephone;
            state.authBack.address = payload[0].address;
            state.authBack.birth = payload[0].birth;
            state.authBack.rolId = payload[0].rolId;
            state.authBack.generoId = payload[0].generoId;
            state.authBack.ciudadId = payload[0].ciudadId;
            state.authBack.errorMessage = null;
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
            state.authBack.errorMessage = payload?.error;
        },
    }
});

export const {login, logout, checkingCredentials, loginBack, logoutBack} = authSlice.actions; 