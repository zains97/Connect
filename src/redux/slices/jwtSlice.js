import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: null,
};

export const jwtSlice = createSlice({
  name: 'jwt',
  initialState,
  reducers: {
    TokenState: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {TokenState} = jwtSlice.actions;

export default jwtSlice.reducer;
