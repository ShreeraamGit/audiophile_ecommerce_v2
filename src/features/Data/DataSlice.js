import { createSlice } from "@reduxjs/toolkit";
import { SHOP_DATA } from "../../data";

const initialState = {
  data: SHOP_DATA,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
