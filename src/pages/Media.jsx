import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, ArrowLeft, X, Eye } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600",
    title: "تدريبات السرعة للناشئين",
    category: "تدريبات",
    desc: "توثيق تدريبات اللياقة المكثفة وتطوير سرعة الحركة لـ Rookies في ملعبنا.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for actual video
    heightClass: "h-72 md:h-[300px]"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600",
    title: "نهائي بطولة هاسل 3x3",
    category: "بطولات",
    desc: "أجواء المباراة النهائية الحماسية بحضور جماهيري لافت في صالة تشرين دمشق.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    heightClass: "h-96 md:h-[450px]"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600",
    title: "معسكر هاسل الصيفي 24",
    category: "معسكرات",
    desc: "لقطات سريعة من الحصص التدريبية المكثفة والورش المهارية في العطلة الصيفية.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    heightClass: "h-80 md:h-[360px]"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600",
    title: "تمارين تكتيك فريق Girls U16",
    category: "تدريبات",
    desc: "تركيز فني وتطوير تسديد المسافات الطويلة للاعبات الأكاديمية.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    heightClass: "h-96 md:h-[420px]"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600",
    title: "تطوير التسديد الخاص One-on-One",
    category: "تدريبات",
    desc: "جلسة تدريب فردية مغلقة تركز على ميكانيكا ودقة الرمية الثلاثية.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    heightClass: "h-72 md:h-[320px]"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=600",
    title: "جلسة التصوير مع براند 963",
    category: "شراكات",
    desc: "التعاون الحصري مع العلامة التجارية السورية الرائدة 963 لتجهيز ملابس الفريق.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    heightClass: "h-80 md:h-[380px]"
  },
];

const categories = ["الكل", "بطولات", "تدريبات", "معسكرات", "شراكات"];

export default function Media() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredItems = activeFilter === "الكل"
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <section className="relative overflow-hidden bg-dark text-white font-sans">
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 select-none pointer-events-none opacity-10">
            <h2 className="text-outline text-8xl md:text-9xl font-black uppercase tracking-tighter">
              GALLERY
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/25 text-primary text-sm font-black mb-6 transform -skew-x-12">
            🎥 المركز الإعلامي • هاسل
          </span>

          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            شاهد <span className="text-primary">الشغف</span>
          </h1>

          <p className="text-silver text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-bold">
            توثيق كامل للعمل الشاق، العرق، العقلية، ولحظات الانتصار داخل ملاعب مدينة تشرين الرياضية بدمشق.
          </p>
        </div>

        {/* 1. HERO VIDEO CONTAINER - Spotlight Design */}
        <div className="mb-24">
          <div className="relative overflow-hidden border-2 border-white/10 hover:border-primary/50 transition-colors h-[400px] md:h-[600px] group shadow-[0_0_35px_rgba(255,107,0,0.15)] transform -skew-y-1">
            <div className="transform skew-y-1 h-full w-full relative">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
                alt="Hustle Academy Promo Cinematic Spotlights"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-60 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              
              {/* Central Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                  className="w-24 h-24 bg-primary text-black flex items-center justify-center border-b-4 border-white shadow-[0_0_30px_rgba(255,107,0,0.6)] group-hover:bg-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform -skew-x-12"
                >
                  <Play className="transform skew-x-12" fill="currentColor" size={32} />
                </motion.button>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-8 mb-4 uppercase">فيديو هاسل التعريفي (Hustle 24)</h2>
                <p className="text-silver max-w-xl text-base md:text-lg font-bold">تعرف على فلسفة الأكاديمية وكواليس التدريب الشاق بمدينة تشرين</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-black transform -skew-x-6">
          {categories.map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 text-sm transform skew-x-6 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                  : "bg-accent border border-white/5 text-silver hover:text-white hover:border-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3. MASONRY GRID GALLERY */}
        <motion.div 
          layout 
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] box-border"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid bg-accent border border-white/5 hover:border-primary/50 group transition-all duration-300 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                {/* Cinematic Image container with dynamic height */}
                <div className={`relative ${item.heightClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 brightness-75 group-hover:brightness-90"
                  />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 bg-primary text-black text-xs font-black px-3 py-1 transform -skew-x-12 border-b-2 border-white">
                    {item.category}
                  </span>

                  {/* Play/View Hover Overlay */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-primary text-black flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(255,107,0,0.5)]">
                      <Play className="transform skew-x-12" fill="currentColor" size={24} />
                    </div>
                  </div>
                </div>

                {/* Description info */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-silver text-xs md:text-sm leading-relaxed font-bold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. SOCIAL INTERACTION ROW */}
        <div className="mt-32">
          <div className="bg-accent border-l-4 border-primary p-12 text-center relative overflow-hidden transform -skew-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 transform skew-y-1">
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-4">تابع الغريند اليومي على إنستغرام</h2>
              <p className="text-silver text-base md:text-lg mb-8 max-w-2xl mx-auto font-bold">
                نقوم بتغطية يومية للتدريبات، اللحظات الطريفة، وتطور اللاعبين على حسابنا الرسمي. كن جزءاً من عائلتنا الرقمية!
              </p>
              <a 
                href="https://instagram.com/hustleball_academy" 
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary hover:bg-[#e05e00] text-black font-black text-lg px-10 py-4 transform -skew-x-12 border-b-4 border-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
              >
                <span className="block transform skew-x-12">@hustleball_academy</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* 5. INTERACTIVE VIDEO PLAYER POPUP MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-accent border-2 border-primary/30 w-full max-w-4xl relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-primary z-50 w-10 h-10 bg-dark/80 flex items-center justify-center border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Video Aspect Ratio */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo}
                  title="Hustle Academy Basketball Video Highlight"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}