import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#D2EAF0]">
      <Navbar />
        {children}
    </div>
  );
}