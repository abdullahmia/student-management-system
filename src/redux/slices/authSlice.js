import { createSlice } from "@reduxjs/toolkit";

// auth initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
