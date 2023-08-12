import { https } from "./config";
export const commentService = {
  postComment: (data) => {
    return https.post("/api/binh-luan", data);
  },
  getAllComment: () => {
    return https.get("/api/binh-luan");
  },
};
