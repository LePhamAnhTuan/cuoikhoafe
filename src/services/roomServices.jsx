import { https } from "./config";
export const roomServ = {
  getAllRoom: () => {
    return https.get("/api/phong-thue");
  },
};
