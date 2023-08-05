import { https } from "./config";

export const userService = {
  signin: (data) => {
    // console.log(data);
    return https.post("/api/auth/signin", data);
  },
  // <<<<<<< HEAD
  signup: (data) => {
    console.log(data);
    return https.post("/api/auth/signup", data);
  },

  signup: (data) => {
    return https.post("/api/auth/signup", data);
  },
  // =======
  userCMT: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`);
    // >>>>>>> 613447a253f40717521754cb8503b224ff088564
  },
  roomUserBooked: (maNguoiDung) => {
    return https.get(`/api/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`);
  },
  // >>>>>>> dd97cdc1e8ff43fcf96d0f40ebdf8e5266ecb5bb
};
