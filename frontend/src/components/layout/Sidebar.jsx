
import {
  House,
  BookOpen,
  ScrollText,
  Scale,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import JustifyLogo from "../../assets/images/justify-logo.png";

export default function Sidebar() {
  const location = useLocation();

  const mainMenus = [
    { name: "Beranda", icon: House, path: "/beranda" },
    { name: "Pusat Edukasi", icon: BookOpen, path: "/pusat-edukasi" },
    { name: "Legal Stories", icon: ScrollText, path: "/legal-stories" },
  ];

  const bottomMenus = [
    { name: "Legalitas & Kebijakan", icon: Scale, path: "/legalitas" },
    { name: "Pengaturan", icon: Settings, path: "/pengaturan" },
    { name: "Log Out", icon: LogOut, path: "/login" },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-50 flex-col overflow-y-auto border-r-2 border-[#258BD1] bg-white px-5 py-7">

      {/* LOGO */}
      <div className="mb-3 flex justify-center">
        <Link to="/">
          <img
            src={JustifyLogo}
            alt="JUSTIFY Logo"
            className="h-30 w-auto object-contain"
          />
        </Link>
      </div>

      {/* MENU UTAMA */}
      <nav className="flex flex-col gap-3">
        {mainMenus.map((menu) => {
          const Icon = menu.icon;
          const active = location.pathname === menu.path;

          return (
            <Link
              key={menu.name}
              to={menu.path}
              className={`flex min-h-10 items-center gap-3 rounded-lg border px-3 py-2 text-xs font-medium transition duration-200 ${
                active
                  ? "border-[#258BD1] bg-[#EAF6FC] text-[#1676B5]"
                  : "border-[#91C5E5] text-[#1676B5] hover:bg-[#EAF6FC]"
              }`}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* PEMISAH */}
      <div className="my-8 border-t border-[#91C5E5]" />

      {/* MENU BAWAH */}
      <nav className="flex flex-col gap-3">
        {bottomMenus.map((menu) => {
          const Icon = menu.icon;
          const active = location.pathname === menu.path;

          return (
            <Link
              key={menu.name}
              to={menu.path}
              className={`flex min-h-10 items-center gap-3 rounded-lg border px-3 py-2 text-xs font-medium transition duration-200 ${
                active
                  ? "border-[#258BD1] bg-[#EAF6FC] text-[#1676B5]"
                  : "border-[#91C5E5] text-[#1676B5] hover:bg-[#EAF6FC]"
              }`}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span className="leading-snug">{menu.name}</span>
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
