"use client";

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Export types for use in our components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
