import justifyLogo from "../../assets/images/justify-logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F668B] text-white">
      {/* BAGIAN ATAS */}
      <div className="max-w-4xl mx-auto pt-10 sm:pt-14 pb-3 sm:pb-4 px-6 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#93c5dd] uppercase">
          UNDERSTANDING EVERYDAY LAW
        </p>

        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
          JUSTIFY is a legal education platform designed to make legal knowledge easier to{" "}
          <br className="hidden sm:inline" />
          understand through real-life cases and interactive learning.
        </p>

        <div className="mt-5 sm:mt-6">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#cfe2eb] px-10 sm:px-10 py-3 text-sm font-bold text-[#1F668B] hover:bg-white transition cursor-pointer shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* BAGIAN BAWAH  */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-2 pb-6 sm:pb-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">

        {/*Logo */}
        <div className="flex items-center justify-center md:justify-start md:flex-1">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-[#cfe2eb] flex items-center justify-center shadow-xs overflow-hidden">
            <img
              src={justifyLogo}
              alt="JUSTIFY"
              className="w-full h-full object-contain scale-125"
            />
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-1">
          <p className="text-xs sm:text-sm text-white/70 font-medium text-center">
            © 2026 Justify, Adiloka
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center md:justify-end md:flex-1 gap-3.5">
          <a
            href="#linkedin"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition cursor-pointer"
          >
            <span className="font-bold text-sm leading-none tracking-tight">in</span>
          </a>

          <a
            href="#facebook"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>

          <a
            href="#instagram"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition cursor-pointer"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="#youtube"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
