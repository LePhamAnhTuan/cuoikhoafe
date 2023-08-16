import { https } from "./config";
export const commentService = {
  postComment: (data) => {
    return https.post("/api/binh-luan", data);
  },
  getAllComment: () => {
    return https.get("/api/binh-luan");
  },
  deleteComment: (id) => {
    return https.delete(`/api/binh-luan/${id}`);
  },
  editComment:(id)=>{
    return https.put(`/api/binh-luan/${id}`)
  }
};
