import { configureStore } from '@reduxjs/toolkit';
import {psicologySlice} from '../slice/psicologySlice';

export default configureStore({
    reducer: {
        psicology: psicologySlice
    },
});