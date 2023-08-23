import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { roomServ } from "../../services/roomServices";
import { userService } from "../../services/userService";
import { set_loading_end, set_loading_started } from "./loadingSlice";

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
  "room/getRoomUserBookedApi",
  async (maNguoiDung) => {
    const res = await userService.roomUserBooked(maNguoiDung);
    // console.log(res);
    return res.data.content;
  }
);
const initialState = {
  arrayRoom: [],
  room: {},
  controlRoom: [],
  arrRenderItem: [],
  EditRoom: [],
};
export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    findRoomBooker: (state, action) => {
      state.EditRoom = [];
      console.log(action.payload);
      state.controlRoom.find((item) => {
        if (item.id == action.payload) {
          state.EditRoom.push(item);
        }
      });
      console.log(state.EditRoom);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRoomAPI.fulfilled, (state, action) => {
      // console.log("action: ", action);
      state.arrayRoom = action.payload;
      // dispatch(set_loading_end());
      // console.log(state.arrayRoom);
    });
    // builder.addCase(getAllRoomAPI.pending, (state, action) => {
    //   dispatch(set_loading_started());
    // });
    builder.addCase(getDetailRoomAPI.fulfilled, (state, action) => {
      state.room = action.payload;
    });
    builder.addCase(getRoomUserBookedApi.fulfilled, (state, action) => {
      state.controlRoom = action.payload;
      console.log("action.payload: ", action.payload);
      state.controlRoom.map((control) => {
        state.arrayRoom.map((room) => {
          if (control.maPhong === room.id) {
            state.arrRenderItem.push(room);
          }
        });
      });
    });
  },
});

export const { findRoomBooker } = roomSlice.actions;
// để sử dụng trong component

export default roomSlice.reducer;
// import trong store của redux
