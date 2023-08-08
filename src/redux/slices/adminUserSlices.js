import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminUser } from "../../services/adminUser";
import { layDuLieuLocal } from "../../util/localStorage";
import { userService } from "../../services/userService";

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await adminUser.user();
  return res.data.content;
});

export const getInfoUserApi = createAsyncThunk(
  "users/getInfoUserApi",
  async (id) => {
    console.log(id);
    const res = await adminUser.getInfoUser(id);
    return res.data.content;
  }
);

const initialState = {
  userValue: [],
  admin: layDuLieuLocal("admin"),
  getUser: [],
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
    // layInFoUser: (state, action) => {
    //   state.userValue.find((item) => {
    //     return item.email == action.payload.email ? (state.getUser = item) : "";
    //   });
    //   // console.log("getUser",)
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userValue = action.payload;
      console.log(state.userValue);
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.userValue = [
        {
          name: "null",
          role: "null",
        },
      ];
    });
    builder.addCase(getInfoUserApi.fulfilled, (state, action) => {
      state.getUser = action.payload;
      // console.log(state.getUser);
    });
  },
});

export const { adminRole, layInFoUser } = userSlice.actions;
export default userSlice.reducer;
