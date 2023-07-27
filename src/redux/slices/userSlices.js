import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminUser } from "../../services/adminUser";

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await adminUser.user();
  return res.data.content;
});

const initialState = {
  userValue: [],
  arrUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.arrUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      console.log("action.payload: ", action.payload);
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

export const { setUserValue } = userSlice.actions;
export default userSlice.reducer;
