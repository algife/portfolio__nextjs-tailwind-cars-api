import { CarProps, SearchStateSlice } from "@/typings.d";
import { PayloadAction } from "@reduxjs/toolkit";

// Prepare the reducers
const searchReducers = {
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

// Export the reducer as the default export
export default searchReducers;
