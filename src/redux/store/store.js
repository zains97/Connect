import {configureStore} from '@reduxjs/toolkit';
import jwtReducer from '../slices/jwtSlice';
import selectedPostReducer from '../slices/selectedPostSlice';
import feedSelectorReducer from '../slices/feedSelectorSlice';
export const store = configureStore({
  reducer: {
    jwt: jwtReducer,
    selectedPost: selectedPostReducer,
    feedSelector: feedSelectorReducer,
  },
});
