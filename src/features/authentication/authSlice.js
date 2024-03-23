import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false, isAuthenticated: true };

const authSlice = createSlice({
  name: "auth",
  initialState,
});

export default authSlice.reducer;
