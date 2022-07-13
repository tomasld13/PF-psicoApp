import { createSlice } from '@reduxjs/toolkit';

//Reducers
export const psicologySlice = createSlice({
    name: 'psicology',
    initialState: {
        psychologists: [],
        patients: [],
        spatiality: [],
        sortPsycho: [],
        copyPsycho: [],
        pychoId: {},
        pacientId: {},
        initPoint: [],
        calendar: {},
        provincias: [],
        ciudades: [],
        psychologiFavs: [],
        facturas: [],
        saldoTotal: []
    },
    reducers: {
        getPsychos: (state, {payload}) => {
            state.psychologists = payload
            state.sortPsycho = payload
        },
        getPsychoByID: (state, {payload}) => {
            state.pychoId = payload;
        },
        getPatients: (state, {payload}) => {
            state.patients = payload;
        },
        getPacientByID: (state, {payload}) => {
            state.pacientId = payload
        },
        filterSpatiality: (state, {payload}) => {
            state.spatiality = payload
            state.copyPsycho = payload
        },
        sortByNamePsycho: (state, {payload}) => {
            if(payload === 'asc') {
                return {
                    ...state,
                    psychologists: state.sortPsycho?.slice().sort((a,b) => {
                        if(a.name > b.name) return 1;
                        else if (a.name < b.name) return -1;
                        return 0;
                    }),
                    spatiality: state.copyPsycho?.slice().sort((a,b) => {
                        if(a.name > b.name) return 1;
                        else if (a.name < b.name) return -1;
                        return 0;
                    }),
                }
            } else if(payload === 'desc') {
                return {
                    ...state,
                    psychologists: state.sortPsycho?.slice().sort((a,b) => {
                        if(a.name < b.name) return 1;
                        else if (a.name > b.name) return -1;
                        return 0;
                    }),
                    spatiality: state.copyPsycho?.slice().sort((a,b) => {
                        if(a.name < b.name) return 1;
                        else if (a.name > b.name) return -1;
                        return 0;
                    }),
                }
            } else {
                return {
                    ...state,
                    psychologists: state.sortPsycho,
                    spatiality: state.copyPsycho,
                }
            }
        },
        sortByExpPsycho: (state, {payload}) => {
            if(payload === 'asc') {
                return {
                    ...state,
                    psychologists: state.sortPsycho?.slice().sort((a,b) => {
                        if(a.yearsExperience > b.yearsExperience) return 1;
                        else if (a.yearsExperience < b.yearsExperience) return -1;
                        return 0;
                    }),
                    spatiality: state.copyPsycho?.slice().sort((a,b) => {
                        if(a.yearsExperience > b.yearsExperience) return 1;
                        else if (a.yearsExperience < b.yearsExperience) return -1;
                        return 0;
                    }),
                }
            } else if(payload === 'desc') {
                return {
                    ...state,
                    psychologists: state.sortPsycho?.slice().sort((a,b) => {
                        if(a.yearsExperience < b.yearsExperience) return 1;
                        else if (a.yearsExperience > b.yearsExperience) return -1;
                        return 0;
                    }),
                    spatiality: state.copyPsycho?.slice().sort((a,b) => {
                        if(a.yearsExperience < b.yearsExperience) return 1;
                        else if (a.yearsExperience > b.yearsExperience) return -1;
                        return 0;
                    }),
                }
            } else {
                return {
                    ...state,
                    psychologists: state.sortPsycho,
                    spatiality: state.copyPsycho,
                }
            }
        }, 

        postMercadopago: (state, {payload}) => {
            state.initPoint = payload;
        },
        calendar: (state, {payload}) => {
            state.calendar = payload;
        },
        getProvinciasSelect: (state, {payload}) => {
            state.provincias = payload;
        },
        getCiudadesSelect: (state, {payload}) => {
            state.ciudades = payload;
        },
        getPsychologistFavs: (state, {payload}) => {
            state.psychologiFavs = payload;
        },
        getPsicologoFacturas: (state, {payload}) => {
            state.facturas = payload;
        },
        getSaldoTotalPsicologo: (state, {payload}) => {
            state.saldoTotal = payload;
        },
        postMercadoPsicologo: (state, {payload}) => {
            state.initPoint = payload;
        },
        getPacienteFacturas: (state, {payload}) => {
            state.facturas = payload;
        }
    },
    
});

export const {getPsychos,
        filterSpatiality,
        sortByNamePsycho,
        getPsychoByID,
        postMercadopago,
        calendar,
        getProvinciasSelect,
        getCiudadesSelect,
        sortByExpPsycho,
        getPacientByID,
        getPatients,
        getPsychologistFavs,
        getPsicologoFacturas,
        getSaldoTotalPsicologo,
        postMercadoPsicologo,
        getPacienteFacturas} = psicologySlice.actions; 
