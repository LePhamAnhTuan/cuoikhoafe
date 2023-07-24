import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import ListRoom from "./Component/ListRoom/ListRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<ListRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
