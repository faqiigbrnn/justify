import {Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Footer from "./components/layout/Footer.jsx";
import LegalStories from "./pages/LegalStories.jsx"
import LegalStoriesScene from "./pages/LegalStoriesScene.jsx"

function App() {
  return (
      <Routes>

        <Route path="/" element={<><Navbar /> <LandingPage /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Legal Stories */ }
        <Route path="/legal-stories" element={<LegalStories />} />
        <Route path="/legal-stories/:theme" element={<LegalStoriesScene />} />
      </Routes>

  );
}
export default App;
