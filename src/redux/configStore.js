import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import roomSLices from "./slices/roomSLices";
import adminUserSlices from "./slices/adminUserSlices";

export const store = configureStore({
  reducer: {
    user: userSlice,
    adminUser: adminUserSlices,
    room: roomSLices,
  },
});
