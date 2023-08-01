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
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import RoomDetails from "./Components/RoomDetails/RoomDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          {/* <Route index element={<ListRoom />} /> */}
          <Route index element={<HomePage />} />
          {/* <Route index element={<ListRoom />} /> */}
          <Route path="/detail">
            <Route path=":id" element={<RoomDetails />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />s
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route path="admin-login" element={<AdminLogin />} />

        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<AdminStandar />} />
          <Route path="user" element={<AdminUser />}>
            <Route path=":id" element={<AdminUser />} />
          </Route>
          <Route path="location" element={<AdminLocation />} />
          <Route path="room" element={<AdminRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
