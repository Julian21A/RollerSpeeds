// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },


  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('https://localHoost:3000/api/login', userData)
    dispatch(loginSuccess());
    return response.data;
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Error desconocido'));
    throw error;
  }
};

export default authSlice.reducer;
