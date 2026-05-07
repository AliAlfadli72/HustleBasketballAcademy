import { motion } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";

const mediaItems = [
  {
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
    title: "معسكر هاسل الصيفي 24",
    category: "معسكرات",
    desc: "أجواء الحماس والتطوير المكثف في مدينة تشرين الرياضية."
  },
  {
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    title: "تدريبات فريق Girls 16",
    category: "تدريبات",
    desc: "تمكين الفتيات من خلال مهارات كرة السلة الاحترافية."
  },
  {
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "بطولة هاسل 3x3",
    category: "بطولات",
    desc: "منافسات قوية بمشاركة واسعة من الأندية المحلية."
  },
  {
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
    title: "جلسات التدريب الخاص",
    category: "تطوير مهارات",
    desc: "تطوير تقنيات التسديد والمراوغة الفردية."
  },
  {
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8",
    title: "فعالية يوم العائلة",
    category: "فعاليات",
    desc: "بناء روابط مجتمعية بين اللاعبين وذويهم خارج الملعب."
  },
  {
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    title: "التعاون مع 963",
    category: "شراكات",
    desc: "جلسة تصوير خاصة بالتعاون مع العلامة التجارية 963."
  },
];

export default function Media() {
  return (
    <section className="relative overflow-hidden bg-[#212121] text-white">
      {/* Brand Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#611977]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD54F]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#611977]/20 border border-[#611977]/40 text-[#FFD54F] text-sm mb-8"
          >
            🎥 المركز الإعلامي لأكاديمية هاسل
          </motion.span>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            نوثق <span className="text-[#FFD54F]">الشغف</span>
          </motion.h1>

          <p className="text-gray-300 text-lg md:text-xl leading-10 font-['Noto_Sans_Arabic']">
            اكتشف أبرز اللحظات من قلب الحدث في مدينة تشرين الرياضية؛ حيث يلتقي الانضباط بالحماس في كل لقطة.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 font-bold">
          {["الكل", "بطولات", "تدريبات", "معسكرات", "شراكات"].map((filter, i) => (
            <button
              key={i}
              className={`px-8 py-3 rounded-full border transition-all ${
                i === 0 
                ? "bg-[#611977] border-[#611977] text-white shadow-lg" 
                : "bg-white/5 border-white/10 text-gray-400 hover:border-[#FFD54F]/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Video Feature Section */}
        <div className="mb-24">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 h-[500px] md:h-[650px] group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
              alt="Hustle Promo"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 rounded-full bg-[#FFD54F] text-[#212121] flex items-center justify-center mb-8 shadow-2xl"
              >
                <Play fill="currentColor" size={32} />
              </motion.button>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">هاسل: أكثر من مجرد تدريب</h2>
              <p className="text-white/80 max-w-xl text-lg">شاهد الفيديو التعريفي بالأكاديمية وبرامجنا لعام 2024</p>
            </div>
          </div>
        </div>

        {/* Grid Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#1a1a1a] rounded-[32px] overflow-hidden border border-white/5 hover:border-[#611977]/50 transition-all shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#FFD54F] text-[#212121] text-xs font-black px-4 py-2 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-7 mb-6 font-['Noto_Sans_Arabic']">
                  {item.desc}
                </p>
                <button className="flex items-center gap-2 text-[#FFD54F] font-bold group-hover:gap-4 transition-all text-sm">
                  عرض الألبوم <ArrowLeft size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Feed CTA */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-[#611977] to-[#4a125a] rounded-[40px] p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                هل تريد رؤية المزيد؟
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                كن جزءاً من مجتمعنا النشط وتابع تغطيتنا اليومية للتدريبات والبطولات عبر إنستغرام.
              </p>
              <a 
                href="https://instagram.com/hustleball_academy" 
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#FFD54F] text-[#212121] px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition"
              >
                @hustleball_academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}