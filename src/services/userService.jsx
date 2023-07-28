import { https } from "./config";

export const userService = {
  signin: (data) => {
    console.log(data);
    return https.post("/api/auth/signin", data);
  },
};
