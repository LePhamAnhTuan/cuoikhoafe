import { https } from "./config";

export const adminUser = {
  user: () => {
    return https.get("/api/users");
  },
};
