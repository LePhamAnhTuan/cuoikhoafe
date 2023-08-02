import { https } from "./config";

export const userService = {
  signin: (data) => {
    // console.log(data);
    return https.post("/api/auth/signin", data);
  },
  // <<<<<<< HEAD
  signup: (data) => {
    return https.post("/api/auth/signup", data);
  },
  // =======
  userCMT: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`);
    // >>>>>>> 613447a253f40717521754cb8503b224ff088564
  },
};
