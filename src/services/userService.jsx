import { https } from "./config";

export const userService = {
  signin: (data) => {
    // console.log(data);
    return https.post("/api/auth/signin", data);
  },
  userCMT: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`);
  },
};
