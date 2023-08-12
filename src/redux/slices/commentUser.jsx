import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roomServ } from "../../services/roomServices";
import { userService } from "../../services/userService";
import { set_loading_end, set_loading_started } from "./loadingSlice";
import { commentService } from "../../services/commentService";
export const getAllCommentApi = createAsyncThunk(
  "room/getAllCommentApi",
  async () => {
    try {
      const res = await commentService.getAllComment();
      // alert("success");
      // console.log(res);
      return res.data.content;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const postCommentApi = createAsyncThunk(
  "room/postCommentApi",
  async (comment) => {
    try {
      const res = await commentService.postComment(comment);
      // alert("success");
      console.log(res);
      document.getElementById("noiDung").value = "";
      return res.data.content;
    } catch (error) {
      alert("thất bại");
      console.log("error", error);
    }
  }
);
const initialState = {
  arrComment: [],
  updateBinhLuan: [],
  arrUsercmt: [],
};
export const commentUserSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    // findUserCmt: (state, action) => {
    //   console.log(action.payload);
    //   state.arrComment.map((item) => {
    //     console.log(item);
    //     if (
    //       item.maNguoiBinhLuan == action.payload.id &&
    //       item.maPhong == action.maPhong
    //     ) {
    //       state.arrUsercmt.push(item);
    //     }
    //   });
    //   // console.log(index);
    //   console.log(state.arrComment);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(postCommentApi.fulfilled, (state, action) => {
      // console.log("action: ", action);
      state.updateBinhLuan = action.payload;
      // console.log(state.updateBinhLuan);
    });
    builder.addCase(getAllCommentApi.fulfilled, (state, action) => {
      // console.log("action: ", action.payload);
      state.arrComment = action.payload;
      // console.log(state.arrComment);
    });
  },
});
export const {  } = commentUserSlice.actions;
// để sử dụng trong component
export default commentUserSlice.reducer;
// import trong store của redux
