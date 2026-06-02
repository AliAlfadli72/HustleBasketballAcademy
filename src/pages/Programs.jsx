import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, Award, Calendar, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const programTiers = [
  {
    title: "برنامج الناشئين (Rookies)",
    age: "5 - 12 سنة",
    schedule: "الأحد والثلاثاء (4:00 مساءً)",
    intensity: "مبتدئ / أساسيات",
    intensityLevel: "ROOKIE MODE",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=70&auto=format&fm=webp",
    desc: "حصص تدريبية مخصصة للأطفال والمبتدئين لتعليم أساسيات كرة السلة وتطوير المهارات الحركية والتوافق العصبي العضلي في بيئة رياضية محفزة.",
    features: ["تعليم مهارات التمرير والتسديد", "تحسين اللياقة البدنية والسرعة", "غرس روح العمل الجماعي", "مباريات داخلية مصغرة"],
    colSpan: "md:col-span-7",
    heightClass: "h-80 md:h-[450px]"
  },
  {
    title: "فريق النخبة (Elite Prospects)",
    age: "13 - 18 سنة",
    schedule: "الإثنين والأربعاء والسبت (6:00 مساءً)",
    intensity: "قاسي / احترافي",
    intensityLevel: "BEAST MODE",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=600&q=70&auto=format&fm=webp",
    desc: "تدريب فني وتكتيكي مكثف مصمم للاعبين الذين يطمحون للمنافسة على مستويات عالية والانضمام للأندية المحلية والمنتخبات الوطنية.",
    features: ["تكتيكات اللعب المعقدة (خطط الهجوم والدفاع)", "رفع اللياقة البدنية والتحمل العالي", "تدريب فردي مخصص لتطوير المراوغة والتصويب", "المشاركة في بطولات الفئات العمرية"],
    colSpan: "md:col-span-5",
    heightClass: "h-96 md:h-[500px]"
  },
  {
    title: "معسكر المهارات والتصويب (Skills Camp)",
    age: "مفتوح لكافة الأعمار",
    schedule: "معسكرات موسمية مكثفة (نهاية الأسبوع)",
    intensity: "تركيز عالي جداً",
    intensityLevel: "HIGH FOCUS",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=70&auto=format&fm=webp",
    desc: "معسكرات تدريبية مركزة تركز بشكل أساسي على ميكانيكا التصويب الصحيحة، إنهاء الكرات تحت السلة، وصناعة اللعب الفردية والذكاء الملعب.",
    features: ["تحليل ميكانيكي لحركة التسديد", "تدريبات سرعة رد الفعل واتخاذ القرار", "تمارين ضغط فني مكثف", "شهادة إنهاء المعسكر وهدايا تذكارية"],
    colSpan: "md:col-span-5",
    heightClass: "h-96 md:h-[500px]"
  },
  {
    title: "برنامج فريق الإناث (Girls U16)",
    age: "11 - 16 سنة (إناث)",
    schedule: "الثلاثاء والخميس (5:30 مساءً)",
    intensity: "حماسي / تنافسي",
    intensityLevel: "FIERY MODE",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=70&auto=format&fm=webp",
    desc: "تدريبات خاصة بالفتيات تهدف لتطوير المهارات الفنية، وبناء الثقة بالنفس، وإعدادهن للمشاركة في الدوريات المحلية بالشراكة مع الأندية الوطنية.",
    features: ["تطوير التوافق الحركي والسرعة", "جلسات إعداد ذهني وبناء شخصية قيادية", "مباريات ودية وتنافسية دورية", "بيئة رياضية شاملة وآمنة تماماً"],
    colSpan: "md:col-span-7",
    heightClass: "h-80 md:h-[450px]"
  }
];

export default function Programs() {
  return (
    <section className="bg-dark text-white overflow-hidden font-sans">
      
      {/* 1. HERO HEADER */}
      <div className="relative pt-24 pb-16 px-4 md:px-8 spotlight-glow">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-primary font-black tracking-widest text-sm block mb-4 uppercase">
            HUSTLE TRAINING SYSTEM
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tighter">
            برامجنا <span className="text-primary">التدريبية</span>
          </h1>
          <p className="text-silver text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold">
            منهجيات تدريبية حديثة وعنيفة مصممة خصيصاً لبناء لاعبي النخبة في صالات وملاعب مدينة تشرين الرياضية بدمشق.
          </p>
        </div>

        {/* Outline background text */}
        <div className="absolute top-1/3 left-0 select-none pointer-events-none opacity-10">
          <h2 className="text-outline text-9xl md:text-[14rem] font-black uppercase tracking-tighter">
            SYSTEM
          </h2>
        </div>
      </div>

      {/* 2. STATS OVERVIEW */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "منهجية معتمدة", value: "100%" },
            { label: "مدربين دوليين ومحليين", value: "+12" },
            { label: "ساعة تدريب في الأسبوع", value: "40+" },
            { label: "ملاعب مدينة تشرين", value: "01" },
          ].map((stat, i) => (
            <div key={i} className="bg-accent border border-white/5 p-6 md:p-8 transform -skew-x-6 hover:border-primary transition-colors">
              <div className="text-primary text-3xl md:text-4xl font-black mb-1 font-display transform skew-x-6">{stat.value}</div>
              <div className="text-silver text-xs md:text-sm font-bold transform skew-x-6">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SLANTED/ASYMMETRIC PROGRAMS GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-28 relative z-10">
        
        {/* Slanted Section Dividers applied directly to the container to give speed */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {programTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${tier.colSpan} bg-accent border border-white/5 hover:border-primary transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]`}
            >
              {/* Asymmetric height and photo placement */}
              <div className={`relative ${tier.heightClass} overflow-hidden`}>
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 brightness-75 group-hover:brightness-90"
                  loading="lazy"
                />
                
                {/* Intensity Indicator Badge - Neon/Glowing design */}
                <div className="absolute top-4 left-4 bg-black/90 border border-primary text-primary px-3 py-1 font-black text-xs uppercase tracking-wider transform -skew-x-12">
                  INTENSITY: {tier.intensityLevel}
                </div>

                {/* Corner Age Tag */}
                <div className="absolute bottom-4 right-4 bg-primary text-black font-black px-4 py-2 text-sm transform -skew-x-12 border-b-2 border-white">
                  {tier.age}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 md:p-10">
                <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">
                  {tier.title}
                </h3>
                
                <p className="text-silver leading-relaxed text-sm md:text-base mb-6 font-bold">
                  {tier.desc}
                </p>

                {/* Metadata Row */}
                <div className="grid sm:grid-cols-2 gap-4 bg-dark/50 p-4 border border-white/5 mb-8 text-xs font-bold text-silver">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={16} />
                    <span>المواعيد: {tier.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="text-primary" size={16} />
                    <span>الشدة: {tier.intensity}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-block bg-primary hover:bg-[#e05e00] text-black font-black px-6 py-3.5 transform -skew-x-12 border-b-2 border-white transition-all hover:scale-105"
                  >
                    <span className="block transform skew-x-12">سجل في هذا البرنامج</span>
                  </Link>
                  <a
                    href="https://wa.me/963992502544"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border border-white/20 hover:border-primary text-white hover:text-primary font-black px-6 py-3.5 transform -skew-x-12 transition-all hover:scale-105"
                  >
                    <span className="block transform skew-x-12">استفسار واتساب</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. PRIVATE ONE-ON-ONE INTENSE CALLOUT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="relative overflow-hidden bg-accent border-2 border-primary/20 p-8 md:p-16 transform -skew-y-2">
          
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center transform skew-y-2">
            
            <div className="md:col-span-8">
              <span className="text-primary font-black uppercase tracking-wider text-xs block mb-2">INDIVIDUAL ELITE DRILLS</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
                التدريب الخاص الفردي <br />
                <span className="text-primary">One-On-One Training</span>
              </h2>
              <p className="text-silver text-base md:text-lg leading-relaxed mb-8 max-w-3xl font-bold">
                هل تريد تسريع وتيرة تطورك؟ نقدم جلسات تدريبية خاصة ومغلقة تركز بنسبة 100% على نقاط ضعفك وتطور تقنيات تسديدك وحركتك بالكرة تحت إشراف نخبة من كبار مدربي الأكاديمية بشكل مباشر.
              </p>
              
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-primary text-black font-black px-8 py-4 transform -skew-x-12 border-b-4 border-black transition-all hover:scale-105"
              >
                <span className="block transform skew-x-12">احجز جلستك الخاصة الآن</span>
              </Link>
            </div>

            <div className="md:col-span-4 hidden md:block">
              <div className="aspect-square bg-dark border border-white/10 rounded-none flex items-center justify-center relative overflow-hidden group hover:border-primary transition-colors">
                <div className="absolute inset-0 bg-primary/5 group-hover:scale-110 transition-transform"></div>
                <Flame className="text-primary animate-pulse relative z-10" size={100} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}