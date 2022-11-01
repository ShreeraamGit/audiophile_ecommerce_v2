import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenSize: window.innerWidth,
};

const pageSlice = createSlice({
  name: "mediaQuery",
  initialState,
  reducers: {
    getWindowDimensions: (state) => {
      state.screenSize = window.innerWidth;
    },
  },
});

export const { getWindowDimensions } = pageSlice.actions;

export default pageSlice.reducer;
