import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verifyTokenRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyTokenSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload?.uid;
    },
    verifyTokenFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      localStorage.setItem("token", action.payload.token);
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    fetchUserDataRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchUserDataSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user
      state.error = null
    },
    fetchUserDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout,
  verifyTokenFailure,
  verifyTokenRequest,
  verifyTokenSuccess,
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure
} = authSlice.actions;

export default authSlice.reducer;
