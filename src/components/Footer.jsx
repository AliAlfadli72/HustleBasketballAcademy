import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  ChevronLeft,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "البرامج", path: "/programs" },
  { name: "المركز الإعلامي", path: "/media" },
  { name: "تواصل معنا", path: "/contact" },
];

const programs = [
  "برنامج الناشئين والشباب",
  "فريق الإناث U16",
  "معسكرات Hustle Camps",
  "بطولات 3x3 التنافسية",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#1a1a1a] font-['Noto_Sans_Arabic']">
      {/* Brand Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#611977]/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD54F]/5 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Brand & Mission - Derived from PDF Page 2 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#611977] to-[#4a125a] flex items-center justify-center shadow-2xl shadow-[#611977]/40">
                <span className="text-[#FFD54F] text-3xl font-black italic">H</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tighter">HUSTLE</h2>
                <p className="text-[#FFD54F] uppercase tracking-[0.3em] text-[10px] font-bold">Basket For All</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              تأسست أكاديمية "هاسل" في قلب دمشق لتكون مجتمعاً رياضياً متكاملاً يبني الجيل القادم بالانضباط، الشغف، والروح الرياضية العالية.
            </p>

            <div className="flex items-center gap-4">
              {[
                {  href: "https://instagram.com/hustleball_academy", label: "Instagram" },
                { icon: <MessageCircle size={20} />, href: "https://wa.me/963992502544", label: "WhatsApp" },
                { icon: <Phone size={20} />, href: "tel:0992502544", label: "Call" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#611977] hover:text-white hover:border-[#611977] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-[#611977] pr-4">خريطة الموقع</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FFD54F] transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Programs List */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-[#611977] pr-4">برامجنا</h3>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFD54F] group-hover:scale-150 transition-transform" />
                  <span className="font-medium">{program}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black text-white mb-8 border-r-4 border-[#611977] pr-4">أين تجدنا</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-[#FFD54F] shrink-0" size={24} />
                <p className="text-gray-400 text-sm leading-6">
                  دمشق، سوريا <br />
                  <span className="text-white font-bold">مدينة تشرين الرياضية</span>
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-[#611977]/20 to-transparent border border-[#611977]/30 rounded-3xl">
                <h4 className="text-white font-black mb-2">مستعد للتحدي؟</h4>
                <p className="text-gray-400 text-xs mb-4">انضم لأكثر من 200 لاعب في مجتمعنا الرياضي.</p>
                <Link
                  to="/contact"
                  className="block text-center bg-[#FFD54F] text-[#212121] py-3 rounded-xl font-black text-sm hover:scale-105 transition-transform"
                >
                  سجل الآن
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Hustle Basketball Academy.
            <span className="hidden md:inline mx-2">|</span>
            نطمح لتغيير مفهوم الرياضة المجتمعية.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest font-black italic">
              Developed for Champions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}