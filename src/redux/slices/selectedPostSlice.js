import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedPost: null,
};

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    SelectedPostState: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {SelectedPostState} = selectedPostSlice.actions;

export default selectedPostSlice.reducer;
