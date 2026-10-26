import { Link, NavLink } from "react-router-dom";
import justifyLogo from "../../assets/images/justify-logo.png";

function Navbar() {
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Pusat Edukasi", to: "/pusat-edukasi" },
    { label: "Quiz", to: "/quiz" },
    { label: "Legal Stories", to: "/legal-stories" },
  ];

  return (
    <nav className="w-full bg-white shadow-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center shrink-0">
          <img src={justifyLogo} alt="JUSTIFY" className="h-25 w-auto object-contain mt-1.5" />
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-base font-bold transition-colors ${
                  isActive ? "text-[#2071a3]" : "text-slate-900 hover:text-[#2071a3]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3.5">
          <Link
            to="/register"
            className="rounded-lg border border-[#2071a3] px-5 py-2 text-sm font-semibold text-[#2071a3] hover:bg-[#2071a3] hover:text-white transition"
          >
            Join For Free
          </Link>
          <Link
            to="/login"
            className="rounded-lg bg-[#2071a3] px-6 py-2 text-sm font-semibold text-white hover:bg-[#185a82] transition"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
