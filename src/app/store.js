import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Data/DataSlice";
import pageReducer from "../features/pageName/pageNameSlice";
import deviceSizeReducer from "../features/mediaQuery/MediaQuerySlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    pageName: pageReducer,
    screenSize: deviceSizeReducer,
  },
});
