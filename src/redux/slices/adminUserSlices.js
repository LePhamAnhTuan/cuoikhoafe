import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminUser } from "../../services/adminUser";
import { layDuLieuLocal } from "../../util/localStorage";

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await adminUser.user();
  return res.data.content;
});

const initialState = {
  userValue: [],
  admin: layDuLieuLocal("admin"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adminRole: (state, action) => {
      if (state.admin == null) {
        state.admin = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userValue = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.userValue = [
        {
          name: "null",
          role: "null",
        },
      ];
    });
  },
});

export const { adminRole } = userSlice.actions;
export default userSlice.reducer;
