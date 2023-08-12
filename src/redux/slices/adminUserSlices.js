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
export const getAllRent = createAsyncThunk("user/getAllRent", async () => {
  const res = await adminUser.adminGetAllRent();
  return res.data.content;
});

export const getInfoUserApi = createAsyncThunk(
  "users/getInfoUserApi",
  async (id) => {
    const res = await adminUser.getInfoUser(id);
    // console.log(res);
    return res.data.content;
  }
);
export const editAvatarApi = createAsyncThunk(
  "users/editAvatarApi",
  async (data) => {
    const res = await adminUser.editAvatar(data);
    console.log(res);
    // return res.data.content;
  }
);
const initialState = {
  userValue: [],
  admin: layDuLieuLocal("admin"),
  vitri: [],
  roomrent: [],
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

    builder.addCase(getAllRent.fulfilled, (state, action) => {
      state.roomrent = action.payload;
      console.log("state: ", state);
    });
    builder.addCase(getAllRent.rejected, (state, action) => {
      state.roomrent = [];
    });
    builder.addCase(getInfoUserApi.fulfilled, (state, action) => {
      state.getUser = action.payload;
      // console.log(state.getUser);
    });
    // builder.addCase(getInfoUserApi.rejected, (state, action) => {
    //   state.getUser = "tôi bị lỗi";
    // });

    builder.addCase(editAvatarApi.fulfilled, (state, action) => {
      // console.log(state.getUser);
      console.log(action.payload);
      state.getUser = action.payload;
      // console.log(state.getUser);
    });
  },
});

export const { adminRole } = userSlice.actions;
export default userSlice.reducer;
