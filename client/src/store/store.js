import { configureStore } from '@reduxjs/toolkit';
import { psicologySlice } from '../slice/psico/psicologySlice.js';
import { authSlice } from '../slice/auth/authSlice.js';

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        psicology: psicologySlice.reducer
    },
});