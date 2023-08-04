import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roomServ } from "../../services/roomServices";
import { userService } from "../../services/userService";

export const getAllRoomAPI = createAsyncThunk(
  "room/getAllRoomAPI",
  async () => {
    const res = await roomServ.getAllRoom();
    // console.log(res);
    return res.data.content;
  }
);
export const getDetailRoomAPI = createAsyncThunk(
  "room/getDetailRoomAPI",
  async (id) => {
    const res = await roomServ.getDetailRoom(id);
    return res.data.content;
  }
);
export const getRoomUserBookedApi = createAsyncThunk(
  "book/getRoomUserBookedApi",
  async (maNguoiDung) => {
    const res = await userService.roomUserBooked(maNguoiDung);
    console.log(res);
    return res.data.content;
  }
);
const initialState = {
  arrayRoom: [],
  room: {},
  controlRoom: {},
  arrRenderItem: [],
};
export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    findRenderItem: (state, action) => {
      console.log(state.arrayRoom);
      console.log(action.payload);
      // let index = state.arrayRoom.filter(
      //   (items) => items.id == action.payload.maPhong
      // );
      // state.arrRenderItem = index;
      // console.log(items.id);
      // console.log(action.payload.maPhong);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRoomAPI.fulfilled, (state, action) => {
      //   console.log("action: ", action);
      state.arrayRoom = action.payload;
      console.log(state.arrayRoom);
    });

    builder.addCase(getRoomUserBookedApi.fulfilled, (state, action) => {
      state.controlRoom = action.payload;
      console.log("state.payload: ", action.payload);
      console.log("state.controlRoom: ", state.controlRoom);
    });
  },
});

export const { findRenderItem } = roomSlice.actions;
// để sử dụng trong component

export default roomSlice.reducer;
// import trong store của redux
