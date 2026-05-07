import { motion } from "framer-motion";
import { CheckCircle2, Star, Zap, Trophy, Users } from "lucide-react";

const programs = [
  {
    title: "برنامج الناشئين",
    icon: <Users className="text-[#FFD54F]" size={32} />,
    level: "من سن 5 إلى 12 سنة",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    description: "حصص تدريبية مخصصة للأطفال والمبتدئين لتعليم أساسيات كرة السلة وتطوير التوافق الحركي في بيئة تربوية محفزة.",
    features: ["أساسيات التمرير والتسديد", "تطوير المهارات الحركية", "بناء الشخصية الرياضية", "مباريات تعليمية مصغرة"],
  },
  {
    title: "برنامج فريق الإناث",
    icon: <Star className="text-[#FFD54F]" size={32} />,
    level: "فريق Girls 16",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    description: "برنامج تدريبي متخصص يركز على التمكين الرياضي وصقل المهارات الفنية للاعبات للمشاركة في البطولات المحلية.",
    features: ["تكتيكات اللعب الجماعي", "رفع منسوب اللياقة", "المشاركة في دوريات 963", "تعزيز الثقة بالنفس"],
  },
  {
    title: "معسكرات هاسل (Hustle Camp)",
    icon: <Zap className="text-[#FFD54F]" size={32} />,
    level: "معسكرات موسمية مكثفة",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
    description: "معسكرات تطويرية مكثفة (مثل معسكر 24) تقام في العطلات لرفع المستوى الفني والبدني في وقت قياسي.",
    features: ["تدريبات صباحية ومسائية", "ورش عمل فنية", "تحديات مهارية يومية", "شهادات مشاركة"],
  },
  {
    title: "بطولات 3x3 وفعاليات",
    icon: <Trophy className="text-[#FFD54F]" size={32} />,
    level: "لجميع المستويات",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
    description: "تنظيم والمشاركة في بطولات كرة السلة الثلاثية لتعزيز روح المنافسة والاندماج في المجتمع الرياضي السوري.",
    features: ["قواعد الـ FIBA 3x3", "جوائز للمراكز الأولى", "تغطية إعلامية احترافية", "أجواء حماسية"],
  },
];

export default function Programs() {
  return (
    <section className="bg-[#212121] text-white overflow-hidden font-['Noto_Sans_Arabic']">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 px-6">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#611977]/20 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#FFD54F] font-bold tracking-[0.2em] text-sm block mb-4"
          >
            HUSTLE TRAINING HUB
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            برامجنا <span className="text-[#FFD54F]">التدريبية</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            منهجيات تدريبية حديثة مستوحاة من أفضل المدارس العالمية، مصممة لتناسب المواهب السورية في قلب دمشق.
          </p>
        </div>
      </div>

      {/* Stats Quick View */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "منهجية حديثة", value: "100%" },
            { label: "مدربين محترفين", value: "+12" },
            { label: "ساعة تدريب/أسبوع", value: "40+" },
            { label: "فرع (مدينة تشرين)", value: "01" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center">
              <div className="text-[#FFD54F] text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-white/5 rounded-[40px] overflow-hidden group hover:border-[#611977]/50 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80" 
                />
                <div className="absolute top-6 left-6 bg-[#611977] text-white px-4 py-2 rounded-full text-xs font-bold">
                  {program.level}
                </div>
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#212121] rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  {program.icon}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-3xl font-black mb-4 group-hover:text-[#FFD54F] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-400 leading-8 mb-8">
                  {program.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#611977]" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-[#FFD54F] text-[#212121] px-8 py-3 rounded-full font-black hover:scale-105 transition">
                    سجل الآن
                  </button>
                  <button className="text-white border-b border-white/20 pb-1 text-sm font-bold hover:text-[#FFD54F] hover:border-[#FFD54F] transition">
                    التفاصيل الفنية
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action - Special Training */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-r from-[#611977] to-[#4a125a] rounded-[50px] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 italic">ONE-ON-ONE TRAINING</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                هل تبحث عن تطوير مهارة محددة؟ نقدم جلسات تدريبية فردية تركز على تقنيات التسديد، المراوغة، والذكاء الملعب، بإشراف مباشر من كبار مدربي الأكاديمية.
              </p>
              <button className="bg-white text-[#611977] px-10 py-4 rounded-full font-black hover:bg-[#FFD54F] hover:text-[#212121] transition">
                احجز جلستك الخاصة
              </button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
                 <Zap size={120} className="text-[#FFD54F] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}