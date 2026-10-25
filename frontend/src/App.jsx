import {Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/register.jsx";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
      <Routes>

        <Route path="/" element={<><Navbar /> <LandingPage /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

  );
}
export default App;
