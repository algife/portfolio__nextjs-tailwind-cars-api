import { AuthStateSlice } from "@/typings.d";
import { createSlice } from "@reduxjs/toolkit";
import authReducers from "../reducers/auth.reducers";

// Prepare the initial state
export const initialState: AuthStateSlice = {
  isAuth: false,
  isModerator: false,
  username: "",
  uid: "",
};

// Create the state slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: authReducers
});

export default authSlice;
