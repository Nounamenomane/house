import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./mainSlice";
import { authSlice } from "./authSlice";

const reducers = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("isAuth", state.auth.isAuth);
});
