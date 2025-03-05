import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
