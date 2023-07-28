import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import ListRoom from "./Components/ListRoom/ListRoom";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          {/* <Route index element={<ListRoom />} /> */}
          <Route index element={<HomePage />} />
          <Route index element={<ListRoom />} />
          <Route path="/signin" element={<SignIn />} />s
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
