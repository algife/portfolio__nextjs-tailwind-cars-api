import { SearchStateSlice } from "@/typings.d";
import { createSlice } from "@reduxjs/toolkit";
import searchReducers from "../reducers/search.reducers";

// Prepare the initial state
const initialState: SearchStateSlice = {
  results: [],
  filters: {
    manufacturer: "",
    model: "",
    year: undefined,
    fuel: undefined,
    page: 1,
  },
};

// Create the state slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: searchReducers,
});

export default searchSlice;
