import ConfirmEmail from "./components/Pages/ConfirmEmail";
import LandingPage from "./components/Pages/LandingPage";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

export default function App() {
  return (
    <div>
      <Login />
      <Register />
      <ConfirmEmail />
      <LandingPage />
    </div>
  );
}
