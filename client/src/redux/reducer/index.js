import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    success: false,
    user: null,
  },

  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.success = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "http://localhost:8081/auth/login",
      userData
    );
    dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(
      loginFailure(error.response?.data?.message || "Error desconocido")
    );
    throw error;
  }
};

export default authSlice.reducer;
