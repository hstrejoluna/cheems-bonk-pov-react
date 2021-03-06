import { configureStore } from "@reduxjs/toolkit";
import toneReducer from "./toneSlice";

export default configureStore({
  reducer: {
    tone: toneReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
