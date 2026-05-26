import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Trophy,
  Users,
  MapPin,
  Flame,
  ChevronDown,
  Zap,
} from "lucide-react";

export default function Home() {
  const USPs = [
    {
      title: "موقع استراتيجي",
      icon: MapPin,
      desc: "نتواجد في قلب دمشق بمدينة تشرين الرياضية، مما يسهل الوصول إلينا من جميع الأحياء.",
    },
    {
      title: "أكاديمية شاملة",
      icon: Flame,
      desc: "برامج مخصصة للجنسين بخصوصية تامة واحترافية عالية، لأن الرياضة حق للجميع.",
    },
    {
      title: "مجتمع رياضي حقيقي",
      icon: Users,
      desc: "نبني علاقات اجتماعية تتجاوز الملعب بين اللاعبين وذويهم في بيئة محفزة.",
    },
  ];

  const stats = [
    { label: "لاعب متدرب", value: "+250", icon: Users },
    { label: "بطولات محلية ومشاركة", value: "+15", icon: Trophy },
    { label: "مدربين محترفين", value: "+12", icon: Zap },
  ];

  return (
    <div className="overflow-hidden bg-dark text-white font-sans">
      
      {/* 1. HERO SECTION - Dramatic Rim-Lit Spotlight Atmosphere */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-8 spotlight-glow">
        {/* Background Visual */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600"
            alt="Hustle Academy Basketball Chiaroscuro"
            className="w-full h-full object-cover opacity-35"
          />
          {/* Rim light spotlight overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
        </div>

        {/* Huge Brutalist Outline Background Text Overlap */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0 overflow-hidden">
          <h2 className="text-outline text-[12vw] font-black uppercase tracking-tighter opacity-20">
            HUSTLE
          </h2>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/10 border border-primary text-primary px-4 py-1.5 transform -skew-x-12 mb-6 font-black uppercase text-xs tracking-wider"
          >
            BASKETBALL ACADEMY • DAMASCUS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tighter font-display uppercase"
          >
            DRIVE WITH <br />
            <span className="text-primary text-shadow-orange">FOCUS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-silver text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-bold"
          >
            أكثر من مجرد مدرسة لتعليم فنون كرة السلة؛ إننا مجتمع رياضي في مدينة تشرين الرياضية يهدف لبناء جيل يتمتع بالانضباط، الشغف، والصلابة البدنية والذهنية.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-primary hover:bg-[#e05e00] text-black font-black text-lg px-10 py-5 transform -skew-x-12 border-b-4 border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]"
            >
              <span className="block transform skew-x-12">سجل في الغريند الآن</span>
            </Link>

            <Link
              to="/programs"
              className="w-full sm:w-auto border-2 border-white text-white hover:border-primary hover:text-primary font-black text-lg px-10 py-5 transform -skew-x-12 transition-all duration-300 hover:scale-105"
            >
              <span className="block transform skew-x-12">استكشف البرامج</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 z-20 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown className="text-primary hover:text-white transition-colors" size={36} />
        </motion.div>
      </section>

      {/* 2. RUNNING TICKER ROW - Brutalist Design in Raw Motion */}
      <section dir="ltr" className="bg-primary py-4 overflow-hidden border-t-4 border-b-4 border-white relative z-20 transform -skew-y-2">
        <div className="animate-ticker text-black whitespace-nowrap flex gap-12 text-2xl md:text-4xl font-black italic tracking-tighter uppercase">
          {Array(10)
            .fill(["HUSTLE", "DRIVE", "FOCUS", "GRIND", "COURT", "ELITE", "DAMASCUS", "TISHREEN"])
            .flat()
            .map((word, i) => (
              <span key={i} className="flex items-center gap-4">
                <span>{word}</span>
                <span className="text-white">•</span>
              </span>
            ))}
        </div>
      </section>

      {/* 3. METRIC COUNTERS SECTION - Asymmetric Columns & Glowing Borders */}
      <section className="py-24 px-4 md:px-8 relative z-10 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-accent border-l-4 border-primary p-8 md:p-10 relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="absolute right-4 bottom-4 text-white/5 font-black text-8xl font-display select-none">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    </div>
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 font-display">{stat.value}</h3>
                  <p className="text-silver text-lg font-bold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SLANTED SECTION DIVIDER - Raw Athletic Speed */}
      <section className="relative py-28 bg-accent overflow-hidden z-20">
        {/* Slanted backgrounds */}
        <div className="absolute inset-0 bg-primary/5 transform -skew-y-3 origin-top-left border-t border-b border-primary/20"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Outline text overlapping content block */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-16 -right-10 select-none pointer-events-none opacity-20">
                <h3 className="text-outline text-8xl font-black uppercase">COURT</h3>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                رؤيتنا <br />
                <span className="text-primary">و رسالتنا</span>
              </h2>
              <p className="text-silver text-lg leading-relaxed mb-8 font-bold">
                أن نصبح الأكاديمية الأولى في سوريا لتخريج مواهب كرة السلة الشابة القادرة على التميز والمنافسة، من خلال منهجيات تدريبية حديثة مستوحاة من أفضل المدارس العالمية.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-white font-black hover:text-primary group transition-colors"
              >
                <span>تعرف علينا أكثر</span>
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={20} />
              </Link>
            </div>

            {/* Asymmetric Graphic Block */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Glow behind */}
                <div className="absolute -inset-1.5 bg-primary opacity-25 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Asymmetric slanted card */}
                <div className="relative overflow-hidden transform -skew-x-3 border-2 border-white/20 hover:border-primary transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200"
                    alt="Gritty Basketball Training in Damascus"
                    className="w-full h-[400px] object-cover filter brightness-75 hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 right-6 bg-primary text-black font-black px-6 py-3 uppercase text-sm transform skew-x-3">
                    HUSTLE HQ • TISHREEN
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY HUSTLE ACADEMY - Asymmetric grid container */}
      <section className="py-24 px-4 md:px-8 bg-dark relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-right">
            <span className="text-primary font-black uppercase tracking-widest text-sm">WHY HUSTLE ACADEMY</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase mt-2">لماذا هاسل؟</h2>
          </div>

          {/* Asymmetric Grid: Ensures no two content blocks have identical aspect ratios */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Block 1 - Wide (Col span 7) */}
            <div className="md:col-span-7 bg-accent border-t-4 border-primary p-10 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all">
              <div>
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <MapPin className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4">نتدرب في ملاعب مدينة تشرين الرياضية</h3>
                <p className="text-silver leading-relaxed text-base">
                  موقع استراتيجي في قلب العاصمة دمشق، مجهز بملاعب داخلية وخارجية مطابقة للمعايير لتوفير بيئة تدريبية مثالية لكل الفئات العمرية.
                </p>
              </div>
              <div className="mt-8 text-outline text-6xl font-black uppercase select-none opacity-10 text-left font-display">
                MAP
              </div>
            </div>

            {/* Block 2 - Tall (Col span 5) */}
            <div className="md:col-span-5 bg-accent border-b-4 border-white p-10 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all">
              <div>
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <Flame className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4">الالتزام والانضباط</h3>
                <p className="text-silver leading-relaxed text-base">
                  نحن لا نعلم فقط رمي الكرة؛ نحن نزرع العادات الرياضية القوية وبناء الشخصية، ونركز على أن تكون الأكاديمية ملاذاً آمناً لتفريغ الطاقات وصناعة القادة.
                </p>
              </div>
              <div className="mt-8 text-outline text-6xl font-black uppercase select-none opacity-10 text-left font-display">
                MIND
              </div>
            </div>

            {/* Block 3 - Tall (Col span 5) */}
            <div className="md:col-span-5 bg-accent border-t-4 border-white p-10 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all">
              <div>
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4">مجتمع رياضي تفاعلي</h3>
                <p className="text-silver leading-relaxed text-base">
                  نشرك أهالي اللاعبين في رحلة تطور أولادهم وننظم فعاليات وبطولات دورية تدعم التفاعل والروح الرياضية والروابط الاجتماعية.
                </p>
              </div>
              <div className="mt-8 text-outline text-6xl font-black uppercase select-none opacity-10 text-left font-display">
                UNIT
              </div>
            </div>

            {/* Block 4 - Wide (Col span 7) */}
            <div className="md:col-span-7 bg-accent border-b-4 border-primary p-10 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all">
              <div>
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <Trophy className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4">برامج مكثفة و معسكرات دورية</h3>
                <p className="text-silver leading-relaxed text-base">
                  معسكرات تدريبية متخصصة (مثل Hustle Camps) بمشاركة مدربين وخبراء محليين، وربط مستمر مع أندية كرة السلة الوطنية لتأمين فرص احترافية واعدة.
                </p>
              </div>
              <div className="mt-8 text-outline text-6xl font-black uppercase select-none opacity-10 text-left font-display">
                WIN
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. URGENT CALL TO ACTION - High Impact */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-accent">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 bg-dark border-2 border-primary/30 p-12 md:p-16 transform -skew-y-2 shadow-[0_0_35px_rgba(255,107,0,0.15)]">
          <div className="transform skew-y-2">
            <h2 className="text-3xl md:text-6xl font-black uppercase mb-6 leading-tight">
              هل أنت مستعد <br />
              <span className="text-primary">لتكون جزءاً من عائلتنا؟</span>
            </h2>
            <p className="text-silver text-lg md:text-xl mb-10 max-w-2xl mx-auto font-bold">
              تواصل معنا اليوم واحجز حصتك التجريبية المجانية في ملعبنا بمدينة تشرين الرياضية. لا تجلس على الهامش!
            </p>
            
            <div className="flex flex-wrap justify-center gap-5">
              <a 
                href="tel:0992502544" 
                className="inline-block bg-primary hover:bg-[#e05e00] text-black font-black text-lg px-8 py-4 transform -skew-x-12 border-b-4 border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]"
              >
                <span className="block transform skew-x-12">اتصل بنا الآن (0992502544)</span>
              </a>
              <a 
                href="https://instagram.com/hustleball_academy" 
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-white hover:border-primary text-white hover:text-primary font-black text-lg px-8 py-4 transform -skew-x-12 transition-all duration-300 hover:scale-105"
              >
                <span className="block transform skew-x-12">تابعنا على إنستغرام</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}