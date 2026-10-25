
import justifyLogo from "../../assets/images/justify-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Pusat Edukasi", to: "/pusat-edukasi" },
    { label: "Quiz", to: "/quiz" },
    { label: "Legal Stories", to: "/legal-stories" },
  ];

  const linkStyle = ({ isActive }) =>
    `text-md font-bold transition-colors duration-200 ${
      isActive
        ? "text-[#2071a3]"
        : "text-slate-800 hover:text-[#2071a3]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm backdrop-blur-sm">
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10">
        <div className="relative flex min-h-20 items-center justify-between gap-6">

          {/* LOGO */}
          <Link to="/" className="flex w-1/5 shrink-0 items-center justify-center">
            <img
              src={justifyLogo}
              alt="JUSTIFY"
              className="h-auto w-32 md:w-36  "
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className=" hidden flex-1  items-center gap-8 lg:flex xl:gap-20">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkStyle}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* TOMBOL DESKTOP */}
          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            <Link
              to="/register"
              className="rounded-md border border-[#2071a3] px-4 py-2 text-md font-semibold text-[#2071a3] transition hover:bg-[#2071a3] hover:text-white"
            >
              Join For Free
            </Link>

            <Link
              to="/login"
              className="rounded-md bg-[#2071a3] px-8 py-2 text-md font-semibold text-white transition  hover:text-[#2071a3] hover:border hover:border-[#2071a3] hover:bg-white"
            >
              Login
            </Link>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 rounded bg-[#2071a3] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-[#2071a3] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-[#2071a3] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-slate-100 py-3 lg:hidden">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-sky-50 text-[#2071a3]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-[#2071a3] px-3 py-3 text-center text-sm font-semibold text-[#2071a3]"
            >
              Join For Free
            </Link>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-md bg-[#2071a3] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
