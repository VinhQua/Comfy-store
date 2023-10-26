"use client";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice/productSlice";
import { Provider } from "react-redux";
import React from "react";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
