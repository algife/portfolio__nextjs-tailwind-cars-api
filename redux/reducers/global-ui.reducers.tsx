import { GlobalUIStateSlice } from "@/typings.d";
import { PayloadAction } from "@reduxjs/toolkit";

// Prepare the reducers
const globalUIReducers = {
  setLoadingStart: (
    currentSliceState: GlobalUIStateSlice,
    _action: PayloadAction<void>
  ) => {
    return {
      ...currentSliceState,
      isLoading: true,
    };
  },
  setLoadingEnd: (
    currentSliceState: GlobalUIStateSlice,
    _action: PayloadAction<void>
  ) => {
    return {
      ...currentSliceState,
      isLoading: false,
    };
  },
};

// Export the reducer as the default export
export default globalUIReducers;
