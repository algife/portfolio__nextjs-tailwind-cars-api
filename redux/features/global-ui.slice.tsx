import { GlobalUIStateSlice } from "@/typings.d";
import { createSlice } from "@reduxjs/toolkit";
import globalUIReducers from "../reducers/global-ui.reducers";

// Prepare the initial state
const initialState: GlobalUIStateSlice = {
  isLoading: false,
};

// Create the state slice
const globalUISlice = createSlice({
  name: "global-ui",
  initialState,
  reducers: globalUIReducers,
});

export default globalUISlice;
