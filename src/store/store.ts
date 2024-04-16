"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

//reducers
import modalsReducer from "@/store/slice/modal/modalReducer";
import LoginReducer from "./slice/login-slice/loginSlice";

const store = configureStore({
  reducer: {
    modal: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
