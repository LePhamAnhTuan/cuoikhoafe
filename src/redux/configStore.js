import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import roomSLices from "./slices/roomSLices";

export const store = configureStore({
  reducer: {
    user: userSlice,

    room: roomSLices,
  },
});
