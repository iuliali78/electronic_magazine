import { configureStore } from "@reduxjs/toolkit";
import { modalSlice, tableDataSlice, userSlice } from "./slices";

export const store = configureStore({
  reducer: { userSlice, modalSlice, tableDataSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
