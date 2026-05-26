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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070707] font-sans">
      {/* Background Court Lighting */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              {/* Sporty Asymmetric Logo icon */}
              <div className="w-14 h-14 bg-primary flex items-center justify-center transform -skew-x-12 border-b-4 border-r-2 border-white shadow-[0_0_15px_rgba(255,107,0,0.35)]">
                <span className="text-black text-2xl font-black italic transform skew-x-12">H</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white font-display tracking-tight leading-none">HUSTLE <span className="text-primary">ACADEMY</span></h2>
                <p className="text-silver uppercase tracking-[0.2em] text-[9px] font-bold mt-1">Basket For All</p>
              </div>
            </div>

            <p className="text-silver leading-relaxed mb-8 text-base max-w-md">
              أكاديمية رياضية متكاملة في قلب دمشق. نهدف لبناء جيل قوي من لاعبي كرة السلة من خلال الانضباط، التدريب القاسي، وغرس عقلية الفوز داخل الملعب وخارجه.
            </p>

            {/* Social Icons with Orange Glow on Hover */}
            <div className="flex items-center gap-4">
              {[
                { 
                  icon: <MessageCircle size={20} />, 
                  href: "https://instagram.com/hustleball_academy", 
                  label: "Instagram" 
                },
                { 
                  icon: <MessageCircle size={20} />, 
                  href: "https://wa.me/963992502544", 
                  label: "WhatsApp" 
                },
                { 
                  icon: <Phone size={20} />, 
                  href: "tel:0992502544", 
                  label: "Call" 
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent border border-white/10 flex items-center justify-center text-silver hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-lg font-black text-white mb-6 border-r-4 border-primary pr-3 uppercase tracking-wider">الروابط</h3>
            <div className="space-y-3.5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center gap-1 text-silver hover:text-primary transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Programs List */}
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-lg font-black text-white mb-6 border-r-4 border-primary pr-3 uppercase tracking-wider">برامجنا</h3>
            <div className="space-y-3.5">
              {programs.map((program, index) => (
                <div key={index} className="flex items-center gap-2 text-silver group cursor-default">
                  <div className="w-1.5 h-1.5 bg-primary group-hover:scale-150 transition-transform duration-300" />
                  <span className="font-bold text-sm">{program}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Quick CTA */}
          <div className="lg:col-span-3 md:col-span-4">
            <h3 className="text-lg font-black text-white mb-6 border-r-4 border-primary pr-3 uppercase tracking-wider">أين تجدنا</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <p className="text-silver text-sm leading-relaxed">
                  دمشق، سوريا <br />
                  <span className="text-white font-black">مدينة تشرين الرياضية</span>
                </p>
              </div>
              
              {/* Asymmetric CTA Card */}
              <div className="p-5 bg-accent border-l-4 border-primary relative overflow-hidden">
                <h4 className="text-white font-black text-sm mb-1">جاهز لتسجيل انطلاقتك؟</h4>
                <p className="text-silver text-xs mb-4">انضم لعائلتنا الرياضية وتدرب مع الأفضل.</p>
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-black py-2.5 font-black text-xs transition-transform duration-300 hover:scale-105"
                >
                  انضم للغريند الآن
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#666666] text-xs font-bold text-center md:text-right">
            © {new Date().getFullYear()} Hustle Basketball Academy. جميع الحقوق محفوظة.
            <span className="hidden md:inline mx-2">|</span>
            نطمح لتغيير مفهوم الرياضة المجتمعية في سوريا.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[9px] text-[#666666] uppercase tracking-widest font-black italic">
              GRIND NEVER STOPS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}