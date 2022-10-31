import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageName: "",
};

const pageSlice = createSlice({
  name: "pageName",
  initialState,
  reducers: {
    getPageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export const { getPageName } = pageSlice.actions;

export default pageSlice.reducer;
