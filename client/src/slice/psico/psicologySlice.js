import { createSlice } from '@reduxjs/toolkit';

//Reducers
export const psicologySlice = createSlice({
    name: 'psicology',
    initialState: {
        psychologists: [],
        spatiality: []
    },
    reducers: {
        getPsychos: (state, {payload}) => {
            state.psychologists = payload
        },
        filterSpatiality: (state, {payload}) => {
            state.spatiality = payload
        }
    },
});

export const {getPsychos, filterSpatiality} = psicologySlice.actions; 