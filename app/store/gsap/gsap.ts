import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "1" 
};

export const gsapSlice = createSlice({
  name: 'gsap',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const { setSelected } = gsapSlice.actions;
export default gsapSlice.reducer;
