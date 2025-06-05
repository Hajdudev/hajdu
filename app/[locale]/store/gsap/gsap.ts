import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: 1,
};

export const gsapSlice = createSlice({
  name: 'gsap',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    resetState: (state) => {
      state.selected = initialState.selected;
    }
  }
});

export const { setSelected ,resetState} = gsapSlice.actions;
export default gsapSlice.reducer;
