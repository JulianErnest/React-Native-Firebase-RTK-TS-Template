import {configureStore} from '@reduxjs/toolkit';
import sampleSlice from './Features/sampleSlice';

const store = configureStore({
    reducer: {
        sampleReducer: sampleSlice
    }
})

export default store