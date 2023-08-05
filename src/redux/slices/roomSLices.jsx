import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { roomServ } from "../../services/roomServices";

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

const initialState = {
  arrayRoom: [],
  room: {},
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRoomAPI.fulfilled, (state, action) => {
      //   console.log("action: ", action);
      state.arrayRoom = action.payload;
    });
    builder.addCase(getDetailRoomAPI.fulfilled, (state, action) => {
      state.room = action.payload;
      // console.log("action.payload: ", action.payload);
    });
  },
});

export const {} = roomSlice.actions;
// để sử dụng trong component

export default roomSlice.reducer;
// import trong store của redux
