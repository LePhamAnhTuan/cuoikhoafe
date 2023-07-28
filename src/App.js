import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import AdminTemplate from "./template/AdminTemplate";
import AdminUser from "./Components/AdminUser/AdminUser";
import AdminLocation from "./Components/AdminLocation/AdminLocation";
import AdminRoom from "./Components/AdminRoom/AdminRoom";
import AdminStandar from "./pages/AdminStandar/AdminStandar";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import ListRoom from "./Components/ListRoom/ListRoom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          {/* <Route index element={<ListRoom />} /> */}
          <Route index element={<HomePage />} />
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
