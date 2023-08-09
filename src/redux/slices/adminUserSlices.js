import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminUser } from "../../services/adminUser";
import { layDuLieuLocal } from "../../util/localStorage";
import { userService } from "../../services/userService";

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await adminUser.user();
  // console.log(res);
  return res.data.content;
});
export const getAllLocation = createAsyncThunk(
  "user/getAllLocation",
  async () => {
    const res = await adminUser.getLocation();
    return res.data.content;
  }
);

export const getInfoUserApi = createAsyncThunk(
  "users/getInfoUserApi",
  async (id) => {
    // console.log(id);
    const res = await adminUser.getInfoUser(id);
    console.log(res);
    return res.data.content;
  }
);
export const editAvatarApi = createAsyncThunk(
  "users/editAvatarApi",
  async (token, data) => {
    const res = await adminUser.editAvatar(token, data);
    // console.log(res);
    return res.data.content;
  }
);
const initialState = {
  userValue: [],
  admin: layDuLieuLocal("admin"),
  vitri: [],
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
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userValue = action.payload;
      // console.log(state.userValue);
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
      // console.log("state: ", state);
    });
    builder.addCase(getAllLocation.rejected, (state, action) => {
      state.vitri = [];
    });

    builder.addCase(getInfoUserApi.fulfilled, (state, action) => {
      state.getUser = action.payload;
      console.log(action.payload);
      console.log("id", state.getUser);
    });
    // builder.addCase(getInfoUserApi.rejected, (state, action) => {
    //   state.getUser = "tôi bị lỗi";
    // });

    // builder.addCase(editAvatarApi.fulfilled, (state, action) => {
    //   console.log(state.getUser);
    //   state.getUser = action.payload;
    //   // console.log(state.getUser);
    // });
  },
});

export const { adminRole } = userSlice.actions;
export default userSlice.reducer;
