import React from 'react';
import { GraduationCap, Users, BookOpen, Target, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Universitet Mentorligi",
      description: "Oliy ta'lim muassasalari uchun akademik va professional mentorlar taqdim etamiz.",
      features: ["Akademik yo'naltirish", "Tadqiqot yordami", "Karera maslahatları"]
    },
    {
      icon: Users,
      title: "Xususiy Maktab Mentorligi",
      description: "Maktab o'quvchilari uchun individual va guruh asosida mentorlik dasturlari.",
      features: ["Individual yondashuv", "Guruh mashg'ulotlari", "Ota-ona bilan ishlash"]
    },
    {
      icon: BookOpen,
      title: "Ta'lim Markazi Yordami",
      description: "Turli ta'lim markazlari uchun ixtisoslashgan mentorlik xizmatlari.",
      features: ["Kurs ishlab chiqish", "O'qituvchi tayyorlash", "Sifat nazorati"]
    },
    {
      icon: Target,
      title: "Maqsadli Dasturlar",
      description: "Muayyan maqsadlar uchun maxsus ishlab chiqilgan mentorlik dasturlari.",
      features: ["Individual rejalar", "Natija monitoring", "Flexible jadval"]
    },
    {
      icon: Clock,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Doimiy maslahat va yordam xizmatlari barcha mijozlarimiz uchun.",
      features: ["Online konsultatsiya", "Tezkor javob", "Texnik yordam"]
    },
    {
      icon: Shield,
      title: "Sifat Kafolati",
      description: "Yuqori sifatli xizmat va professional mentorlar kafolatini beramiz.",
      features: ["Sertifikatlangan mentorlar", "Sifat nazorati", "Mijoz qoniqishi"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bizning Xizmatlarimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ta'lim sohasidagi turli muassasalar uchun professional mentorlik xizmatlari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;