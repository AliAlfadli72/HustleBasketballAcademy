import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Trophy,
  Users,
  MapPin,
  ChevronDown,
  Activity,
} from "lucide-react";

export default function Home() {
  // Features based on actual USPs from the PDF [cite: 21, 23, 25]
  const features = [
    {
      title: "موقع استراتيجي",
      icon: MapPin,
      desc: "نتواجد في قلب دمشق بمدينة تشرين الرياضية، مما يسهل الوصول إلينا من جميع الأحياء.",
    },
    {
      title: "كرة السلة للجميع",
      icon: Activity,
      desc: "برامج مخصصة للجنسين بخصوصية تامة واحترافية عالية، لأن الرياضة حق للجميع.",
    },
    {
      title: "مجتمع نشط",
      icon: Users,
      desc: "نبني علاقات اجتماعية تتجاوز الملعب بين اللاعبين وذويهم في بيئة محفزة.",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#212121] text-white font-['Noto_Sans_Arabic']">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
            alt="Hustle Academy"
            className="w-full h-full object-cover opacity-40"
          />
          {/* Brand Gradient Overlay [cite: 29] */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#611977]/40 via-[#212121]/80 to-[#212121]"></div>
        </div>

        {/* GLOW EFFECTS - Using Brand Purple & Gold  */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#611977]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFD54F]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FFD54F] tracking-[4px] uppercase mb-4 text-sm font-bold"
          >
            BASKETBALL FOR ALL [cite: 8]
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 font-['Montserrat']"
          >
            Hustle Basketball
            <span className="block text-[#FFD54F]">Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg md:text-2xl leading-10 max-w-3xl mx-auto mb-10"
          >
            أكثر من مجرد مدرسة لتعليم فنون كرة السلة؛ إننا مجتمع رياضي يهدف لبناء جيل يتمتع بالانضباط والشغف. [cite: 9, 10]
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              to="/programs"
              className="bg-[#611977] hover:bg-[#4a125a] transition px-10 py-4 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg shadow-[#611977]/20"
            >
              استكشف البرامج
              <ArrowLeft size={20} />
            </Link>

            <Link
              to="/contact"
              className="border border-[#FFD54F]/50 text-[#FFD54F] hover:bg-[#FFD54F]/10 transition px-10 py-4 rounded-full text-lg font-bold backdrop-blur-xl"
            >
              احجز حصتك التجريبية 
            </Link>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 z-20"
        >
          <ChevronDown className="text-[#FFD54F]" size={40} />
        </motion.div>
      </section>
      {/* PROGRAMS SECTION */}
    <section className="py-24 px-6 bg-[#212121]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-['Montserrat']">برامجنا التدريبية</h2>
            <p className="text-gray-400 max-w-xl">منهجيات تدريبية حديثة تناسب جميع الفئات العمرية والمستويات[cite: 17].</p>
          </div>
          <Link to="/programs" className="text-[#FFD54F] font-bold flex items-center gap-2 hover:underline">
            عرض جميع البرامج <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "برنامج الناشئين", desc: "حصص تدريبية مخصصة للأطفال والمبتدئين لتعليم أساسيات اللعبة." },
            { title: "فريق الإناث (Girls 16)", desc: "برنامج تدريبي متخصص للفتيات يركز على التمكين الرياضي والمنافسة." },
            { title: "معسكرات هاسل", desc: "معسكرات مكثفة (مثل Hustle Camp 24) لتطوير المهارات في العطلات." },
          ].map((prog, i) => (
            <div key={i} className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-[#611977]/20 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#FFD54F]">{prog.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{prog.desc}</p>
              <button className="text-xs font-bold tracking-widest uppercase border-b border-[#FFD54F] pb-1">المزيد</button>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* VISION & MISSION */}
<section className="py-24 px-6 relative overflow-hidden">
  {/* Decorative Background Element */}
  <div className="absolute -right-20 top-0 w-96 h-96 bg-[#611977]/10 rounded-full blur-[100px]" />
  
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1519861531473-9200262188bf" 
        className="rounded-[40px] shadow-2xl border border-white/10" 
        alt="Training" 
      />
      <div className="absolute -bottom-6 -left-6 bg-[#FFD54F] text-[#212121] p-8 rounded-3xl hidden md:block">
        <p className="font-black text-2xl">BASKET FOR ALL</p>
        <p className="text-sm font-bold uppercase">Hustle Academy [cite: 8]</p>
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-[#FFD54F] font-bold mb-2">رؤيتنا [cite: 14]</h2>
        <p className="text-2xl font-bold leading-relaxed text-gray-200">
          أن تصبح "هاسل" الأكاديمية الرائدة في سوريا لتخريج مواهب كرة السلة الشابة القادرة على المنافسة محلياً ودولياً.
        </p>
      </div>
      <div className="h-px bg-white/10 w-full" />
      <div>
        <h2 className="text-[#FFD54F] font-bold mb-2">رسالتنا [cite: 16]</h2>
        <p className="text-lg text-gray-400 leading-loose">
          تطوير مهارات الشباب السوري من خلال منهجيات تدريبية حديثة، وتعزيز قيم العمل الجماعي والمثابرة (Hustle) في بيئة رياضية شاملة لا تستثني أحداً[cite: 17].
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 relative bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FFD54F] mb-4 tracking-[3px] font-bold">
              WHY HUSTLE ACADEMY
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">لماذا هاسل؟</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group bg-[#212121] border border-white/5 rounded-[30px] p-10 hover:border-[#611977]/50 transition duration-500 shadow-xl"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#611977]/10 flex items-center justify-center mb-8 group-hover:bg-[#611977] transition-all">
                    <Icon size={40} className="text-[#FFD54F] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CALL TO ACTION */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#611977] to-[#4a125a] rounded-[40px] p-12 text-center relative overflow-hidden shadow-2xl">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
    
    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-black mb-6">
        هل أنت مستعد لتكون جزءاً من عائلة هاسل؟ [cite: 40]
      </h2>
      <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
        تواصل معنا اليوم واحجز حصتك التجريبية الأولى في ملعبنا بمدينة تشرين الرياضية.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="tel:0992502544" 
          className="bg-[#FFD54F] text-[#212121] px-8 py-4 rounded-full font-black flex items-center gap-2 hover:scale-105 transition"
        >
          اتصل بنا الآن [cite: 38]
        </a>
        <a 
          href="https://instagram.com/hustleball_academy" 
          target="_blank"
          className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition"
        >
          تابعنا على إنستغرام [cite: 39]
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}