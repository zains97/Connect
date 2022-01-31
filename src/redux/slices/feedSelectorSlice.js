import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  feedSelector: 'Main',
};

export const feedSelectorSlice = createSlice({
  name: 'feedSelector',
  initialState,
  reducers: {
    FeedSelectorState: (state, action) => {
      state.feedSelector = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {FeedSelectorState} = feedSelectorSlice.actions;

export default feedSelectorSlice.reducer;
