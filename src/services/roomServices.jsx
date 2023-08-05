import { https } from "./config";
export const roomServ = {
  getAllRoom: () => {
    return https.get("/api/phong-thue");
  },
  getDetailRoom: (id) => {
    return https.get(`/api/phong-thue/${id}`);
  },
  getAllBookRoom: () => {
    return https.get("/api/dat-phong");
  },
  getControlBook: (data) => {
    return https.post("/api/dat-phong", data);
  },
};
