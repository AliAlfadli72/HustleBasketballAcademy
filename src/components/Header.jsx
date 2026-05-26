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
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-dark/95 backdrop-blur-md font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo - Asymmetric Sporty Design */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center transform -skew-x-12 border-b-4 border-r-2 border-white shadow-[0_0_15px_rgba(255,107,0,0.4)] group-hover:scale-105 transition duration-300">
              <span className="text-black text-xl md:text-2xl font-black italic transform skew-x-12">H</span>
            </div>

            <div className="text-right">
              <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none font-display">
                HUSTLE <span className="text-primary">ACADEMY</span>
              </h1>
              <p className="text-[9px] text-silver tracking-[0.2em] uppercase font-bold mt-1">
                BASKET FOR ALL
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Sharp Asymmetric Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-accent border border-white/10 p-1.5 transform -skew-x-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 transform skew-x-6 text-sm font-black transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                      : "text-silver hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-primary hover:bg-[#e05e00] text-black font-black text-sm uppercase px-8 py-3 transform -skew-x-12 border-b-4 border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]"
            >
              <span className="block transform skew-x-12">سجل الآن</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-12 h-12 rounded-none bg-accent border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Intense Skewed Overlay */}
      <div
        className={`lg:hidden absolute w-full left-0 bg-[#0d0d0d] border-b border-white/10 transition-all duration-500 ease-in-out ${
          mobileMenu ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `px-6 py-4 text-lg font-black transition-all border-l-4 ${
                    isActive
                      ? "bg-primary/10 border-primary text-white"
                      : "bg-accent text-silver border-transparent hover:border-white/20"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="block text-center bg-primary text-black py-4 font-black text-lg transform -skew-x-6 border-b-4 border-white"
            >
              انضم إلينا اليوم
            </Link>
            
            <a
              href="https://instagram.com/hustleball_academy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-silver font-bold py-2 hover:text-primary transition-colors"
            >
              @hustleball_academy
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}