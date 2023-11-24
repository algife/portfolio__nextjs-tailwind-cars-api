"use client"; // This line makes this component a "Client component".
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

type ProviderProps = { children: React.ReactNode };

export default function ReduxProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
