import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import searchReducers from "./reducers/search.reducers";

export const store = configureStore({
  reducer: {
    search: searchReducers,
  },
  preloadedState: {
    search: undefined,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
