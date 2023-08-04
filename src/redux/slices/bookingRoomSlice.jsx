import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { roomServ } from "../../services/roomServices";

export const getAllBookRoomApi = createAsyncThunk(
  "book/getAllBookRoomApi",
  async () => {
    const res = await roomServ.getAllBookRoom();
    console.log(res);
    return res.data.content;
  }
);
export const getControlBookApi = createAsyncThunk(
  "book/getControlBookApi",
  async (infoBooking) => {
    try {
      const res = await roomServ.getControlBook(infoBooking);
      alert("Đặt vé thành công");
      console.log(res);
      return res.data.content;
    } catch (error) {
      alert("Đặt vé thất bại");
      console.log("error", error);
    }
  }
);
const initialState = {
  ListRoom: [],
};
export const bookingRoomSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getControlBookApi.fulfilled, (state, action) => {
      state.ListRoom = action.payload;
      console.log("state.payload: ", action.payload);
      console.log("state.ListRoom: ", state.ListRoom);
    });
    builder.addCase(getControlBookApi.rejected, (state, action) => {
      console.log("action: ", action);
    });
  },
});

export const {} = bookingRoomSlice.actions;
// để sử dụng trong component
export default bookingRoomSlice.reducer;
// import trong store của redux
