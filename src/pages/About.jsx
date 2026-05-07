import { motion } from "framer-motion";
import { CheckCircle2, Eye, Target, MapPin } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "الشغف",
      desc: "نؤمن أن الشغف هو الوقود الحقيقي لبناء جيل رياضي متميز.",
      icon: "🔥",
    },
    {
      title: "الانضباط",
      desc: "نغرس في لاعبينا قيم الالتزام كطريقة حياة داخل وخارج الملعب.",
      icon: "🏆",
    },
    {
      title: "المثابرة (Hustle)",
      desc: "تعزيز روح الإصرار والعمل الجاد في كل حصة تدريبية.",
      icon: "⚡",
    },
    {
      title: "العمل الجماعي",
      desc: "بيئة شاملة تعزز قيم الفريق الواحد والتعاون لتحقيق الفوز.",
      icon: "🤝",
    },
  ];

  // Specific programs from the academy profile
  const programs = [
    "برنامج الناشئين (أساسيات اللعبة)",
    "فريق الإناث (Girls 16) - تمكين رياضي",
    "معسكرات هاسل (Hustle Camps) المكثفة",
    "بطولات كرة السلة الثلاثية 3x3",
    "التدريب الخاص One-on-One",
    "تطوير المهارات التقنية والشخصية",
  ];

  return (
    <section className="relative overflow-hidden bg-[#212121] text-white">
      {/* Background Brand Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#611977]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD54F]/10 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#611977]/20 border border-[#611977]/40 text-[#FFD54F] text-sm mb-8"
        >
          <MapPin size={16} /> دمشق، مدينة تشرين الرياضية
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-8"
        >
          أكثر من مجرد مدرسة <br />
          <span className="text-[#FFD54F]">لتعليم كرة السلة</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 text-lg md:text-xl leading-10 max-w-3xl mx-auto"
        >
          تأسست أكاديمية "هاسل" في قلب العاصمة دمشق لتكون مجتمعاً رياضياً متكاملاً يهدف إلى بناء جيل يتمتع بالانضباط، الشغف، والروح الرياضية العالية.
        </motion.p>
      </div>

      {/* Story & Vision Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-[#FFD54F]/30 transition"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FFD54F]/10 flex items-center justify-center mb-8">
              <Eye className="text-[#FFD54F]" size={32} />
            </div>
            <h3 className="text-3xl font-black text-[#FFD54F] mb-6">رؤيتنا</h3>
            <p className="text-gray-400 leading-9 text-lg">
              أن تصبح "هاسل" الأكاديمية الرائدة في سوريا لتخريج مواهب كرة السلة الشابة القادرة على المنافسة محلياً ودولياً، وتغيير مفهوم الرياضة المجتمعية.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-[#611977]/30 transition"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#611977]/20 flex items-center justify-center mb-8">
              <Target className="text-[#611977]" size={32} />
            </div>
            <h3 className="text-3xl font-black text-[#611977] mb-6">رسالتنا</h3>
            <p className="text-gray-400 leading-9 text-lg">
              تطوير مهارات الشباب السوري من خلال منهجيات تدريبية حديثة، وتعزيز قيم العمل الجماعي والمثابرة في بيئة رياضية شاملة لا تستثني أحداً.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-['Montserrat']">قيمنا الأساسية</h2>
          <div className="h-1.5 w-24 bg-[#FFD54F] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 text-center"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#FFD54F] mb-4">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Checklist */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#611977]/20 to-transparent border border-white/10 rounded-[40px] p-10 md:p-16">
          <h2 className="text-4xl font-black mb-12 text-center md:text-right">
            ماذا نقدم في <span className="text-[#FFD54F]">هاسل؟</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="flex items-center gap-4 bg-black/20 border border-white/5 rounded-2xl p-5">
                <CheckCircle2 className="text-[#FFD54F]" />
                <p className="text-lg text-gray-200">{program}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 py-28 text-center">
        <div className="bg-[#611977] rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">هل أنت مستعد لتكون جزءاً من عائلة هاسل؟</h2>
            <p className="mb-10 text-white/80">احجز حصتك التجريبية الأولى اليوم في مدينة تشرين الرياضية.</p>
            <button className="bg-[#FFD54F] text-[#212121] px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition shadow-xl">
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}