import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import ListRoom from "./Component/ListRoom/ListRoom";
import AdminTemplate from "./template/AdminTemplate";
import AdminUser from "./Component/AdminUser/AdminUser";
import AdminLocation from "./Component/AdminLocation/AdminLocation";
import AdminRoom from "./Component/AdminRoom/AdminRoom";
import AdminStandar from "./pages/AdminStandar/AdminStandar";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<ListRoom />} />
        </Route>

        <Route path="admin-login" element={<AdminLogin />} />

        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<AdminStandar />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="location" element={<AdminLocation />} />
          <Route path="room" element={<AdminRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
