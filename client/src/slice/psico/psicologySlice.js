import { createSlice } from '@reduxjs/toolkit';

//Reducers
export const psicologySlice = createSlice({
    name: 'psicology',
    initialState: {
        psychologists: [],
        spatiality: [],
        sortPsycho: [],
        copyPsycho: [],
    },
    reducers: {
        getPsychos: (state, {payload}) => {
            state.psychologists = payload
            state.sortPsycho = payload
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
    },
});

export const {getPsychos, filterSpatiality, sortByNamePsycho} = psicologySlice.actions; 