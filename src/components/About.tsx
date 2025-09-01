import React from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "100+", label: "Professional Mentorlar" },
    { icon: Award, number: "50+", label: "Muvaffaqiyatli Loyihalar" },
    { icon: Globe, number: "5+", label: "Yillik Tajriba" },
    { icon: CheckCircle, number: "99%", label: "Mijoz Qoniqishi" }
  ];

  const features = [
    "Barcha mentorlarimiz sertifikatlangan va tajribali",
    "Individual yondashuvga asoslangan xizmat ko'rsatish",
    "Zamonaviy ta'lim metodologiyalaridan foydalanish",
    "Doimiy professional rivojlanish va o'qitish",
    "Sifat nazorati va monitoring tizimi",
    "Mijozlar bilan uzoq muddatli hamkorlik"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Biz Haqimizda
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EduMentor - bu ta'lim sohasida professional mentorlik xizmatlari ko'rsatuvchi 
              yetakchi kompaniya. Biz xususiy maktablar, universitetlar va turli ta'lim 
              markazlariga yuqori malakali mentorlarni taqdim etamiz.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bizning Missiyamiz
              </h3>
              <p className="text-gray-700">
                Har bir ta'lim muassasasiga sifatli mentorlik xizmatlari orqali 
                o'quvchilar va talabalarning intellectual rivojlanishiga hissa qo'shish.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300"
                >
                  <IconComponent className="h-8 w-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;