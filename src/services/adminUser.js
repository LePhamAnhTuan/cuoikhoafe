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
  adminUserId: (id) => {
    return https.get(`/api/users/${id}`);
  },
  adminUserIdPut: (id, data) => {
    return https.put(`/api/users/${id}`, data);
  },
  getLocation: () => {
    return https.get("/api/vi-tri");
  },
  getLocationAdd: (data) => {
    return https.post("/api/vi-tri", data);
  },
  getLocationId: (id) => {
    return https.get(`/api/vi-tri/${id}`);
  },
  deleteLocationId: (id) => {
    return https.delete(`/api/vi-tri/${id}`);
  },
  putLocationId: (id, data) => {
    return https.put(`/api/vi-tri/${id}`, data);
  },
  deleteRoomId: (id) => {
    return https.delete(`/api/phong-thue/${id}`);
  },
  adminRoomThem: (data) => {
    return https.post("/api/phong-thue", data);
  },
  adminRoomId: (id) => {
    return https.get(`/api/phong-thue/${id}`);
  },
  adminRoomPutId: (id, data) => {
    return https.put(`/api/phong-thue/${id}`, data);
  },
  adminGetAllRent: () => {
    return https.get("/api/dat-phong");
  },
  adminGetAllRentId: (id) => {
    return https.get(`/api/dat-phong/${id}`);
  },
  adminDeleteRentId: (id) => {
    return https.delete("/api/dat-phong", id);
  },
  getInfoUser: (id) => {
    return https.get(`/api/users/${id}`);
  },
  editAvatar: (data) => {
    return https.post("/api/users/upload-avatar", data);
  },
};
