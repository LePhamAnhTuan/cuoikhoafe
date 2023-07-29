import { https } from "./config";

export const adminUser = {
  user: () => {
    return https.get("/api/users");
  },
  adminLogin: (data) => {
    return https.post("/api/auth/signin", data);
  },
  adminUserXoa: (data) => {
    return https.delete(`/api/users?id=${data}`);
  },
  adminUserThem: (data) => {
    return https.post("/api/users", data);
  },
};
