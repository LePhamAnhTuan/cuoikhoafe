import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import roomSLices from "./slice/roomSLices";

export const store = configureStore({
  reducer: {
    user: userSlice,
  
    room: roomSLices,
  },
});
