import { motion } from "framer-motion";
import { Phone, MapPin, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="text-[#FFD54F]" size={24} />,
      title: "المقر الرئيسي",
      details: "دمشق، مدينة تشرين الرياضية",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="text-[#FFD54F]" size={24} />,
      title: "رقم التواصل",
      details: "0992502544",
      link: "tel:0992502544"
    },
    {
      icon: <MessageCircle className="text-[#FFD54F]" size={24} />,
      title: "إنستغرام",
      details: "@hustleball_academy",
      link: "https://instagram.com/hustleball_academy"
    },
    {
      icon: <MessageCircle className="text-[#FFD54F]" size={24} />,
      title: "واتساب",
      details: "تواصل مباشر مع الإدارة",
      link: "https://wa.me/963992502544"
    }
  ];

  return (
    <section className="bg-[#212121] text-white overflow-hidden font-['Noto_Sans_Arabic']">
      {/* Hero Header */}
      <div className="relative pt-28 pb-16 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#611977]/10 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            نحن هنا <span className="text-[#FFD54F]">لنسمع منك</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            سواء كنت لاعباً طموحاً أو ولي أمر مهتم، فريق هاسل جاهز للرد على جميع استفساراتكم حول برامجنا ومواعيد التدريب.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-black mb-8 border-r-4 border-[#FFD54F] pr-4">معلومات التواصل</h2>
            
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-[#1a1a1a] border border-white/5 rounded-3xl hover:border-[#611977]/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-[#212121] rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#611977] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">{item.title}</h4>
                    <p className="text-xl font-bold">{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Special Training Callout */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#611977] to-[#4a125a] rounded-[40px] shadow-2xl">
              <h3 className="text-2xl font-black mb-4 italic">BASKET FOR ALL</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                نحن نؤمن بأن كرة السلة للجميع. لا تتردد في زيارتنا في مدينة تشرين الرياضية لمشاهدة حصة تدريبية تجريبية.
              </p>
              <div className="flex items-center gap-2 text-[#FFD54F] font-bold">
                <MapPin size={18} /> دمشق، البرامكة
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#1a1a1a] p-10 md:p-14 rounded-[50px] border border-white/5 shadow-2xl"
            >
              <h3 className="text-3xl font-black mb-8">أرسل استفسارك</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 mr-2">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#212121] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#FFD54F] outline-none transition"
                      placeholder="أدخل اسمك..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 mr-2">رقم الموبايل</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#212121] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#FFD54F] outline-none transition"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mr-2">نوع الاستفسار</label>
                  <select className="w-full bg-[#212121] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#FFD54F] outline-none transition appearance-none">
                    <option>التسجيل في الأكاديمية</option>
                    <option>المعسكرات التدريبية</option>
                    <option>التدريب الخاص (One-on-One)</option>
                    <option>استفسارات عامة</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 mr-2">رسالتك</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-[#212121] border border-white/10 rounded-2xl px-6 py-4 focus:border-[#FFD54F] outline-none transition resize-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                  ></textarea>
                </div>

                <button className="w-full bg-[#FFD54F] text-[#212121] py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#611977] hover:text-white transition-all duration-300 group shadow-xl">
                  إرسال الآن <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Modern Map Placeholder */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative h-[450px] rounded-[50px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition duration-1000">
           {/* هنا يمكن دمج Google Maps iframe */}
           <div className="absolute inset-0 bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-10">
              <div className="w-24 h-24 bg-[#611977] rounded-full flex items-center justify-center mb-6 animate-bounce">
                <MapPin size={40} className="text-[#FFD54F]" />
              </div>
              <h3 className="text-3xl font-black mb-4">تفضل بزيارتنا</h3>
              <p className="text-gray-400 max-w-md">دمشق - البرامكة - مدينة تشرين الرياضية. ملاعب كرة السلة الخارجية والداخلية.</p>
              <a href="#" className="mt-8 text-[#FFD54F] font-bold border-b border-[#FFD54F]">فتح الموقع في خرائط جوجل</a>
           </div>
        </div>
      </div>
    </section>
  );
}