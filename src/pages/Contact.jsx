import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    program: "برنامج الناشئين (Rookies)",
    notes: ""
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "موقع الملاعب",
      details: "دمشق، مدينة تشرين الرياضية (البرامكة)",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone size={24} />,
      title: "رقم الموبايل (اتصال مباشر)",
      details: "0992502544",
      link: "tel:0992502544"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "تواصل واتساب مباشر",
      details: "+963 992 502 544",
      link: "https://wa.me/963992502544"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "حساب الإنستغرام الرسمي",
      details: "@hustleball_academy",
      link: "https://instagram.com/hustleball_academy"
    }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "الاسم مطلوب لتسجيل الحضور.";
    if (!formData.age.trim()) tempErrors.age = "يرجى تحديد الفئة العمرية.";
    
    // Syrian phone validation: must be 10 digits starting with 09, or +963 context
    const phoneRegex = /^(09|\+9639)\d{8}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "رقم الموبايل مطلوب للتأكيد.";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "يرجى إدخال رقم سوري صحيح (مثال: 0992502544).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submission
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          age: "",
          phone: "",
          program: "برنامج الناشئين (Rookies)",
          notes: ""
        });
      }, 1000);
    }
  };

  return (
    <section className="bg-dark text-white overflow-hidden font-sans">
      
      {/* 1. HERO HEADER */}
      <div className="relative pt-24 pb-16 px-4 md:px-8 spotlight-glow">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-primary font-black uppercase tracking-widest text-sm block mb-4">GET IN THE GRIND</span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tighter">
            انضم إلى <span className="text-primary">عائلتنا</span>
          </h1>
          <p className="text-silver text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-bold">
            سجل الآن لحجز حصتك التجريبية المجانية في ملاعب مدينة تشرين الرياضية بدمشق وسيتواصل معك كادرنا فوراً.
          </p>
        </div>

        {/* Outline background text */}
        <div className="absolute top-1/3 left-0 select-none pointer-events-none opacity-10">
          <h2 className="text-outline text-9xl md:text-[14rem] font-black uppercase tracking-tighter">
            JOIN US
          </h2>
        </div>
      </div>

      {/* 2. FORM & INFO SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-28 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* A. Info Column (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-black mb-8 border-r-4 border-primary pr-3 uppercase">قنوات الاتصال المباشر</h2>
            
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 p-6 bg-accent border border-white/5 hover:border-primary transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]"
                >
                  <div className="w-14 h-14 bg-dark flex items-center justify-center border border-white/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors transform -skew-x-12">
                    <div className="transform skew-x-12">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-silver text-xs font-bold mb-1">{item.title}</h4>
                    <p className="text-lg md:text-xl font-black text-white leading-tight">{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Brutalist Sporty Box */}
            <div className="p-8 bg-primary text-black transform -skew-y-1 border-b-4 border-white mt-12 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="transform skew-y-1 relative z-10">
                <h3 className="text-2xl font-black uppercase italic mb-2">BASKET FOR ALL</h3>
                <p className="text-black font-bold text-sm leading-relaxed">
                  نحن نؤمن بأن رياضة كرة السلة تجمع الجميع. ملاعبنا مهيأة ومفتوحة للفئات العمرية من سن 5 سنوات فما فوق. قم بزيارتنا في دمشق واشهد الحماس بنفسك!
                </p>
              </div>
            </div>
          </div>

          {/* B. Form Column (Col span 7) - High Contrast Minimalist Intake Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent p-8 md:p-12 border border-white/5 hover:border-primary/20 transition-all duration-500 relative"
            >
              <h3 className="text-3xl font-black mb-8 border-b border-white/10 pb-4">استمارة التسجيل السريع</h3>
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="registration-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-black text-silver block mr-1">الاسم الكامل للاعب / اللاعبة *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full bg-dark border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-none px-5 py-4 outline-none transition-colors text-white font-bold`}
                        placeholder="أدخل الاسم الثلاثي..."
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs font-bold flex items-center gap-1.5 mt-1">
                          <AlertCircle size={14} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Age Input */}
                      <div className="space-y-2">
                        <label className="text-sm font-black text-silver block mr-1">العمر / المواليد *</label>
                        <input 
                          type="text" 
                          value={formData.age}
                          onChange={(e) => setFormData({...formData, age: e.target.value})}
                          className={`w-full bg-dark border ${errors.age ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-none px-5 py-4 outline-none transition-colors text-white font-bold`}
                          placeholder="مثال: 14 سنة (مواليد 2012)"
                        />
                        {errors.age && (
                          <p className="text-red-500 text-xs font-bold flex items-center gap-1.5 mt-1">
                            <AlertCircle size={14} />
                            {errors.age}
                          </p>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-2">
                        <label className="text-sm font-black text-silver block mr-1">رقم موبايل للتواصل (واتساب) *</label>
                        <input 
                          type="text" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={`w-full bg-dark border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:border-primary rounded-none px-5 py-4 outline-none transition-colors text-white font-bold text-left`}
                          placeholder="0992502544"
                          dir="ltr"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs font-bold flex items-center gap-1.5 mt-1">
                            <AlertCircle size={14} />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Program Dropdown Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-black text-silver block mr-1">الفئة / البرنامج التدريبي المطلوب</label>
                      <div className="relative">
                        <select 
                          value={formData.program}
                          onChange={(e) => setFormData({...formData, program: e.target.value})}
                          className="w-full bg-dark border border-white/10 focus:border-primary rounded-none px-5 py-4 outline-none transition-colors text-white font-bold appearance-none cursor-pointer"
                        >
                          <option>برنامج الناشئين (Rookies) | 5 - 12 سنة</option>
                          <option>فريق النخبة (Elite Prospects) | 13 - 18 سنة</option>
                          <option>برنامج فريق الإناث (Girls U16)</option>
                          <option>معسكر المهارات والتصويب (Skills Camp)</option>
                          <option>جلسات تدريب فردي مغلق (One-on-One)</option>
                        </select>
                        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-primary font-black">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label className="text-sm font-black text-silver block mr-1">ملاحظات أو استفسارات إضافية (اختياري)</label>
                      <textarea 
                        rows="4"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-dark border border-white/10 focus:border-primary rounded-none px-5 py-4 outline-none transition-colors text-white font-bold resize-none"
                        placeholder="هل يملك اللاعب خبرة سابقة؟ هل يعاني من مشاكل صحية؟"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-[#e05e00] text-black font-black text-lg py-5 transform -skew-x-6 border-b-4 border-white flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.4)]"
                    >
                      <span>إرسال طلب الحجز</span>
                      <Send size={18} className="transform -scale-x-100" />
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="text-primary" size={44} />
                    </div>
                    <h3 className="text-3xl font-black text-white">تم استلام طلبك بنجاح!</h3>
                    <p className="text-silver text-base max-w-md mx-auto font-bold">
                      شكراً لتسجيلك في أكاديمية هاسل بمدينة تشرين الرياضية. سيقوم الكادر الإداري بالتواصل معك هاتفياً أو عبر واتساب على الرقم <span className="text-primary font-black dir-ltr inline-block">{formData.phone}</span> لتأكيد موعد الحصة التجريبية الأولى.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="border border-white/20 hover:border-primary text-white hover:text-primary font-black px-8 py-3.5 transform -skew-x-12 transition-all hover:scale-105 mt-6"
                    >
                      <span className="block transform skew-x-12">تسجيل لاعب آخر</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. MINIMALIST MAP PLACEHOLDER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="relative h-[480px] border border-white/10 hover:border-primary/40 transition-colors overflow-hidden group">
          
          {/* Stylized Syrian Dusk Map Placeholder */}
          <div className="absolute inset-0 bg-[#0e0e0e] flex flex-col items-center justify-center text-center p-8">
            {/* Spotlights grid overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent"></div>
            
            <div className="w-20 h-20 bg-primary flex items-center justify-center mb-6 transform -skew-x-12 border-b-4 border-white animate-pulse">
              <MapPin className="text-black transform skew-x-12" size={36} />
            </div>
            
            <h3 className="text-3xl font-black text-white mb-2 uppercase">ملاعب مدينة تشرين الرياضية</h3>
            <p className="text-silver max-w-md text-base md:text-lg font-bold mb-8">
              دمشق - البرامكة - بالقرب من ساحة الرياضيين. نتدرب في الملاعب الداخلية (الصالة المغلقة) والملاعب الخارجية المضاءة ليلاً.
            </p>
            
            <a 
              href="https://maps.google.com/?q=Tishreen+Sports+City+Damascus" 
              target="_blank"
              rel="noreferrer"
              className="bg-accent border border-primary text-primary hover:bg-primary hover:text-black font-black px-8 py-4 transform -skew-x-12 border-b-2 border-white transition-all hover:scale-105"
            >
              <span className="block transform skew-x-12">فتح الموقع على خرائط Google Maps</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}