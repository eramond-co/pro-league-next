"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

//reducers
import modalsReducer from "@/store/slice/modal/modalReducer";
import popupReducer from "./slice/popup/popupReducer";

const forPersistReducers = combineReducers({
  popupReducer,
});

const persistedReducers = persistReducer(
  {
    key: "root",
    storage,
  },
  forPersistReducers
);

const store = configureStore({
  reducer: {
    persistedReducers,
    modal: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
