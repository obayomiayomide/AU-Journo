import ConfirmEmail from "./components/Pages/ConfirmEmail";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/confirm_email" element={<ConfirmEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
