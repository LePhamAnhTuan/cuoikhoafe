import React from "react";
import { layDuLieuLocal } from "../../util/localStorage";

const AdminStandar = () => {
  const admin = layDuLieuLocal("admin");
  console.log("admin: ", admin);
  if (admin?.role != "ADMIN" || admin == null) {
    window.location.href = "https://google.com.vn";
  }
  return (
    <div>
      <p className="bold text-5xl text-red-700">Chào mừng :</p>
    </div>
  );
};

export default AdminStandar;
