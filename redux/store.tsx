import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import globalUISlice from "./features/global-ui.slice";
import searchSlice from "./features/search.slice";

export const store = configureStore({
  reducer: {
    globalUI: globalUISlice.reducer,
    search: searchSlice.reducer,
  },
  preloadedState: {
    globalUI: undefined,
    search: undefined,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
