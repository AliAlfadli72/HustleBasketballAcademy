import { motion } from "framer-motion";
import { Eye, Target, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  const coaches = [
    {
      name: "المدرب طارق الجابي",
      role: "المدير الفني العام",
      bio: "لاعب منتخب سوريا الوطني سابقاً ونجم نادي الجيش. يملك خبرة تمتد لأكثر من 20 عاماً في تطوير مهارات اللاعبين الشباب وصناعة الأبطال.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=70&auto=format&fm=webp",
      specialty: "تطوير المهارات الفردية و تكتيكات اللعب",
    },
    {
      name: "المدرب غياث التونسي",
      role: "مدرب الفئات العمرية والناشئين",
      bio: "أحد أبرز مدربي الفئات السنية في دمشق. يركز على غرس أساسيات اللعبة والانضباط وبناء عقلية رياضية قوية منذ الصغر.",
      image: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=500&q=70&auto=format&fm=webp",
      specialty: "أساسيات كرة السلة و الإعداد البدني",
    },
    {
      name: "المدربة نور السمان",
      role: "مسؤولة برنامج الإناث والفتيات",
      bio: "لاعبة منتخب سوريا الوطني للسيدات سابقاً. تلتزم بتمكين الرياضيات الشابات وصقل مهاراتهن التنافسية للمشاركة في الدوريات الوطنية.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=70&auto=format&fm=webp",
      specialty: "تكتيكات اللعب الجماعي و الإعداد الذهني",
    },
  ];

  const philosophy = [
    {
      title: "الشغف القاسي",
      desc: "نؤمن أن كرة السلة تبدأ بالحب والشغف باللعبة، لكن الشغف وحده لا يكفي دون التدريب المستمر والصلابة.",
      icon: "🔥",
    },
    {
      title: "الانضباط الصارم",
      desc: "التزام اللاعب بمواعيد التدريب، توجيهات المدربين، والأخلاق الرياضية داخل وخارج ملعب مدينة تشرين.",
      icon: "🏆",
    },
    {
      title: "المثابرة والقتال",
      desc: "عقلية الـ Hustle هي شعارنا: الركض خلف كل كرة، المحاولة حتى آخر ثانية، وعدم الاستسلام مهما كانت النتيجة.",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark text-white font-sans">
      
      {/* 1. HERO SECTION - Industrial Brutalist Style */}
      <div className="relative pt-24 pb-20 px-4 md:px-8 spotlight-glow">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/25 text-primary text-sm font-black mb-6 transform -skew-x-12"
          >
            <MapPin size={16} /> دمشق • مدينة تشرين الرياضية
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter font-display leading-none">
            أكثر من مجرد <span className="text-primary">أكاديمية</span>
          </h1>

          <p className="text-silver text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-bold">
            تأسست أكاديمية "هاسل" لتكون مجتمعاً رياضياً متكاملاً يعيد رسم ملامح الرياضة المجتمعية ويبني جيلاً يمتلك القوة والانضباط في قلب العاصمة السورية.
          </p>
        </div>

        {/* Big Outline Background Text */}
        <div className="absolute top-1/3 left-0 select-none pointer-events-none opacity-10">
          <h2 className="text-outline text-9xl md:text-[14rem] font-black uppercase tracking-tighter">
            ABOUT
          </h2>
        </div>
      </div>

      {/* 2. ASYMMETRIC PHILOSOPHY BREAKDOWN */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1 - Vision (Wide & Skewed border) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-accent border-l-8 border-primary p-10 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all"
          >
            <div>
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">رؤيتنا المستقلة</h3>
              <p className="text-silver text-lg leading-relaxed font-bold">
                أن تصبح "هاسل" المنصة الرياضية والتدريبية الأولى في سوريا، لتخريج مواهب قادرة على الاحتراف محلياً ودولياً، ونشر ثقافة كرة السلة كنمط حياة يبني العقول والأجساد.
              </p>
            </div>
            <div className="mt-10 text-outline text-5xl font-black uppercase opacity-10 select-none font-display">
              VISION
            </div>
          </motion.div>

          {/* Card 2 - Mission (Tall) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-5 bg-accent border-b-8 border-white p-10 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all"
          >
            <div>
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">رسالتنا في الملعب</h3>
              <p className="text-silver text-lg leading-relaxed font-bold">
                تطوير المهارات البدنية والتكتيكية للشباب السوري، وتوفير بيئة تدريبية احترافية شاملة للذكور والإناث تدمج بين التعليم الرياضي والتربية الاجتماعية القويمة.
              </p>
            </div>
            <div className="mt-10 text-outline text-5xl font-black uppercase opacity-10 select-none font-display">
              MISSION
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. CORE VALUES - Skewed Section Layout */}
      <div className="relative py-24 bg-accent overflow-hidden z-20 transform -skew-y-3">
        <div className="absolute inset-0 bg-dark/40"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 transform skew-y-3">
          
          <div className="mb-16 text-right">
            <span className="text-primary font-black uppercase tracking-widest text-sm">OUR DNA</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mt-2">عقيدتنا التدريبية</h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="bg-dark border-t-4 border-primary p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-silver text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. MEET THE COACHES - Dark Cards with Orange Glow borders */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-28 relative z-10">
        <div className="mb-16 text-right relative">
          <div className="absolute -top-12 -left-10 select-none pointer-events-none opacity-20">
            <h3 className="text-outline text-7xl md:text-9xl font-black uppercase">COACHES</h3>
          </div>
          <span className="text-primary font-black uppercase tracking-widest text-sm">ELITE MENTORS</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase mt-2">كادرنا التدريبي</h2>
          <p className="text-silver text-lg font-bold max-w-xl mt-4">
            نتدرب على أيدي نخبة من نجوم كرة السلة السورية والمدربين المعتمدين وطنيا.
          </p>
        </div>

        {/* Asymmetric Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent border border-white/5 hover:border-primary transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,107,0,0.25)] flex flex-col h-full"
            >
              {/* Coach Image (Chiaroscuro Cinematic) */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 brightness-75 group-hover:brightness-90"
                  loading="lazy"
                />
                {/* Asymmetric Role Badge */}
                <div className="absolute bottom-4 right-4 bg-primary text-black font-black px-4 py-2 transform -skew-x-12 border-b-2 border-white text-xs">
                  {coach.role}
                </div>
              </div>

              {/* Coach Bio */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed mb-6 font-medium">
                    {coach.bio}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <Award size={16} />
                    <span>التخصص: {coach.specialty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. QUICK VALUE CHECKLIST */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-28 relative z-10">
        <div className="bg-accent border-l-4 border-primary p-8 md:p-14">
          <h2 className="text-3xl font-black mb-8 text-right">
            ما تقدمه <span className="text-primary">هاسل</span> للاعبين
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "بيئة رياضية شاملة متوافقة مع معايير السلامة التامة",
              "مدربين معتمدين وطنياً وأبطال دوري سابقين",
              "متابعة دورية وتطوير المهارات الذهنية للتعامل مع الضغط",
              "تأمين فرص مشاركة واحتكاك مع الأندية المحلية في دمشق",
              "معسكرات تدريبية خاصة في العطلات الصيفية والشتوية",
              "تجهيزات تدريبية ومعدات ذات مستوى احترافي متكامل",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-dark border border-white/5 p-5">
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <p className="text-base text-white font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}