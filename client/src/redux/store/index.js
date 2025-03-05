import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authSlice";
import exposerReducer from "../Reducer/exposerSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    exposer: exposerReducer
  },
});
