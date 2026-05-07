import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "البرامج", path: "/programs" },
  { name: "المركز الإعلامي", path: "/media" },
  { name: "تواصل معنا", path: "/contact" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/5 bg-[#212121]/80 backdrop-blur-xl font-['Noto_Sans_Arabic']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo - Updated to match Royal Purple identity */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#611977] to-[#4a125a] flex items-center justify-center shadow-lg shadow-[#611977]/30 group-hover:scale-110 transition duration-500">
              <span className="text-[#FFD54F] text-2xl font-black italic">H</span>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-black tracking-tighter text-white">
                HUSTLE <span className="text-[#FFD54F]">ACADEMY</span>
              </h1>
              <p className="text-[10px] text-gray-400 tracking-[0.4em] uppercase font-bold leading-none">
                Basket For All
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Modern Pill Shape */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-2xl">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 ${
                    isActive
                      ? "bg-[#FFD54F] text-[#212121] shadow-lg shadow-[#FFD54F]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/contact"
              className="bg-white text-[#212121] hover:bg-[#FFD54F] transition-colors duration-300 px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider"
            >
              سجل الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#611977] transition-colors"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Updated with Brand Colors */}
      <div
        className={`lg:hidden absolute w-full left-0 bg-[#1a1a1a] border-b border-white/5 transition-all duration-500 ease-in-out ${
          mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-10">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `px-6 py-5 rounded-2xl text-xl font-black transition-all ${
                    isActive
                      ? "bg-[#611977] text-white"
                      : "bg-[#212121] text-gray-400 border border-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10 space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="block text-center bg-[#FFD54F] text-[#212121] py-5 rounded-2xl font-black text-lg"
            >
              انضم إلينا اليوم
            </Link>
            
            <a
              href="https://instagram.com/hustleball_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-gray-400 font-bold"
            >
              @hustleball_academy
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}