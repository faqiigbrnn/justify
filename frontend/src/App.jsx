import {Routes, Route} from "react-router-dom";
import BerandaLayout from "./components/layout/BerandaLayout.jsx";
import PublicLayout from "./components/layout/PublicLayout.jsx";

import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Footer from "./components/layout/Footer.jsx";
import LegalStories from "./pages/LegalStories.jsx"
import AllCases from "./pages/AllCases.jsx"
import LegalStoriesScene from "./pages/LegalStoriesScene.jsx"
import Beranda from "./pages/Beranda.jsx";

function App() {
  return (
      <Routes>

        <Route path="/" element={<><PublicLayout><LandingPage /></PublicLayout><Footer/></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/legal-stories" element={<PublicLayout><LegalStories /></PublicLayout>} />
        <Route path="/legal-stories/all" element={<PublicLayout><AllCases /></PublicLayout>} />
        <Route path="/legal-stories/:theme" element={<LegalStoriesScene />} />


        <Route path="/beranda" element={<BerandaLayout><Beranda /></BerandaLayout>} />
        <Route path="/beranda/legal-stories" element={<BerandaLayout><LegalStories /></BerandaLayout>} />
        <Route path="/beranda/legal-stories/all" element={<BerandaLayout><AllCases /></BerandaLayout>} />
      </Routes>

  );
}
export default App;
