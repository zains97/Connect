import {configureStore} from '@reduxjs/toolkit';
import jwtReducer from '../slices/jwtSlice';
import {selectedPostSlice} from '../slices/selectedPostSlice';

export const store = configureStore({
  reducer: {
    jwt: jwtReducer,
    selectedPost: selectedPostSlice,
  },
});
