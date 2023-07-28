import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import roomSLices from "./slice/roomSLices";

export const store = configureStore({
  reducer: { room: roomSLices, user: userSlices },
});
