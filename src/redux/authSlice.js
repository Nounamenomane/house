import { createSlice } from "@reduxjs/toolkit";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: isAuth,
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
