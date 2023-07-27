import { configureStore } from "@reduxjs/toolkit";
import roomSLices from "./slice/roomSLices";

export const store = configureStore({
  reducer: {
    room: roomSLices,
  },
});
