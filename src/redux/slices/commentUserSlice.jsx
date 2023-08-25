import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";
import { set_loading_end, set_loading_started } from "./loadingSlice";
import { commentService } from "../../services/commentService";
import { message } from "antd";
import { adminUser } from "../../services/adminUser";

export const getAllCommentApi = createAsyncThunk(
  "room/getAllCommentApi",
  async () => {
    try {
      const res = await commentService.getAllComment();
      // console.log(res);
      return res.data.content;
    } catch (error) {
      console.log("error", error);
    }
  },
);
export const postCommentApi = createAsyncThunk(
  "room/postCommentApi",
  async (comment) => {
    console.log(comment);
    try {
      const res = await commentService.postComment(comment);
      console.log(res);
      // messageApi.success("thêm thành công");
      document.getElementById("noiDung").value = "";
      return res.data.content;
    } catch (error) {
      // messageApi.error("thêm thất bại");
      console.log("error", error);
    }
  },
);
export const editCommentApi = createAsyncThunk(
  "room/editCommentApi",
  async (data) => {
    // console.log(data);
    try {
      const res = await commentService.editComment(data.id, data);
      // alert("success");
      console.log(res);
      return res.data.content;
    } catch (error) {
      // alert("thất bại");
      console.log("error", error);
    }
  },
);
export const getAvatarCommentApi = createAsyncThunk(
  "users/getAvatarCommentApi",
  async (id) => {
    const res = await commentService.commentRoom(id);
    // console.log(res);
    return res.data.content;
  }
);
const initialState = {
  arrComment: [],
  arrCommentMaPhong: [],
  arrSetComment: [],
  arrGetAvtUser: [],
};
export const commentUserSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    findRoomUser: (state, action) => {
      state.arrCommentMaPhong = [];
      // console.log(state.arrComment);
      // console.log(state.arrCommentMaPhong);
      // console.log(action.payload);
      state.arrComment.map((item) => {
        if (item.maPhong == action.payload) {
          // vào bên trong này sẽ có 1 mảng arrComment chỉ chứa các phần tử bên trong phòng này thôi
          if (state.arrCommentMaPhong != null) {
            let someID = state.arrCommentMaPhong.find((comment) => {
              comment.id == item.id;
            });
            if (!someID) {
              state.arrCommentMaPhong.push(item);
            }
          } else {
            state.arrCommentMaPhong.push(item);
          }
          // console.log("state.arrCommentMaPhong", state.arrCommentMaPhong);
        }
      });
    },
    layDataSetComment: (state, action) => {
      // console.log(action.payload);
      // console.log(state.arrCommentMaPhong);
      state.arrCommentMaPhong.find((item) => {
        if (item.id == action.payload) {
          state.arrSetComment.push(item);
        }
      });
      // console.log("state.arrSetComment", state.arrSetComment);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCommentApi.fulfilled, (state, action) => {
      // console.log("action: ", action.payload);
      state.arrComment = action.payload;
      // console.log(state.arrComment);
    });
    builder.addCase(postCommentApi.fulfilled, (state, action) => {
      console.log("action: ", action.payload);
      state.arrCommentMaPhong.push(action.payload);
      // console.log("arrCommentMaPhong: ", state.arrCommentMaPhong);
    });
    builder.addCase(editCommentApi.fulfilled, (state, action) => {
      console.log("action: ", action.payload);
      let index = state.arrCommentMaPhong.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log(index);
      if (index != -1) {
        state.arrCommentMaPhong[index] = action.payload;
        state.arrSetComment = [];
      }
    });
    builder.addCase(getAvatarCommentApi.fulfilled, (state, action) => {
      state.arrGetAvtUser = action.payload;
      // console.log(state.arrGetAvtUser);
    });
    // console.log("arrCommentMaPhong: ", state.arrCommentMaPhong);
  },
});
export const { findRoomUser, layDataSetComment } = commentUserSlice.actions;
// để sử dụng trong component
export default commentUserSlice.reducer;
// import trong store của redux
