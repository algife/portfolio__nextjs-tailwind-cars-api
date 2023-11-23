import { CarProps, SearchStateSlice } from "@/typings.d";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Prepare the initial state
const initialState: SearchStateSlice = {
  results: [],
  filters: {
    manufacturer: "",
    model: "",
    year: undefined,
    fuel: undefined,
    page: 1,
    // limit: undefined,
  },
};

// Prepare the reducers
const _searchReducers = {
  setSearchResults: (
    currentSliceState: SearchStateSlice,
    action: PayloadAction<CarProps[]>
  ) => {
    return {
      ...currentSliceState,
      results: [...action.payload],
    };
  },
  setSearchParam: (
    currentSliceState: SearchStateSlice,
    action: PayloadAction<{ [pKey: string]: string }>
  ) => {
    return {
      ...currentSliceState,
      filters: { [action.payload[0]]: action.payload[1] ?? "" },
    };
  },
};

// Create the state slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: _searchReducers,
});
