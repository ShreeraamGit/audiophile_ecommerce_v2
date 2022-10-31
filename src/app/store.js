import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Data/DataSlice";
import pageReducer from "../features/pageName/pageNameSlice";
export const store = configureStore({
  reducer: { data: dataReducer, pageName: pageReducer },
});
