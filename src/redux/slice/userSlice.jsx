import { createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../util/localStorage";

// lần đầu tiên người ta vào trang web store sẽ được khởi tạo
const initialState = {
  inFo: layDuLieuLocal("user"),
  // bước này lưu dữ liệu của getALlUser
  // users: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ở đây  chúng ta tạo một phương thức giúp sử lí state bên trên store redux
    setDataName: (state, action) => {
      //  check xem hoTen có dữ liệu hay không nếu không có set dữ liệu cho nó
      if (state.inFo == null) {
        state.inFo = action.payload;
      } else if (action.payload == null) {
        state.inFo = action.payload;
      }
      // state.inFo == action.payload;
      // console.log(" state.inFo", state.inFo);
      // ở đây khi lần đầu đăng nhập vào bên trong trang web thì dữ liệu trên local chưa có nên chúng ta sẽ lấy dữ liệu state.hoTen gán cho nó dữ liệu action.payload mà người dùng đăng nhập vào
      // payload== tất cả các dữ liệu mà người dùng đăng nhập vào để gửi lên redux
    },
  },
});
// phương thức giúp cho chúng ta đem vào sài ở phương thức component
export const { setDataName } = userSlice.actions;
// giúp chúng ta import vào bên trong store redux
export default userSlice.reducer;
