import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roomServ } from "../../services/roomServices";

export const getAllRoomAPI = createAsyncThunk(
  "room/getAllRoomAPI",
  async () => {
    const res = await roomServ.getAllRoom();
    // console.log(res);
    return res.data.content;
  }
);

const initialState = {
  room: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRoomAPI.fulfilled, (state, action) => {
      //   console.log("action: ", action);
      state.room = action.payload;
    });
  },
});

export const {} = roomSlice.actions;
// để sử dụng trong component

export default roomSlice.reducer;
// import trong store của redux
