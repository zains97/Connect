import {configureStore} from '@reduxjs/toolkit';
import jwtReducer from '../slices/jwtSlice';

export const jwtStore = configureStore({
  reducer: {
    jwt: jwtReducer,
  },
});
