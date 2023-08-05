import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminUser } from "../../services/adminUser";
import { layDuLieuLocal } from "../../util/localStorage";

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await adminUser.user();
  return res.data.content;
});
export const getAllLocation = createAsyncThunk(
  "user/getAllLocation",
  async () => {
    const res = await adminUser.getLocation();
    return res.data.content;
  }
);

const initialState = {
  userValue: [],
  admin: layDuLieuLocal("admin"),
  vitri: [],
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
    builder.addCase(getAllLocation.fulfilled, (state, action) => {
      state.vitri = action.payload;
      console.log("state: ", state);
    });
    builder.addCase(getAllLocation.rejected, (state, action) => {
      state.vitri = [];
    });
  },
});

export const { adminRole } = userSlice.actions;
export default userSlice.reducer;
