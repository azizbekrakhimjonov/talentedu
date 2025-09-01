import React from 'react';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-800"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professinal
              <span className="text-emerald-400 block">Mentorlik Xizmatlari</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Xususiy maktablar, universitetlar va ta'lim markazlari uchun yuqori malakali mentorlarni 
              taqdim etamiz. Sifatli ta'lim va professional rivojlanish uchun ishonchli hamkor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Biz bilan bog'laning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Xizmatlarni ko'rish
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100+ Mentorlar</h3>
              <p className="text-blue-100">Turli sohalarda tajribali mutaxassislar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Loyihalar</h3>
              <p className="text-blue-100">Muvaffaqiyatli amalga oshirilgan loyihalar</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300 sm:col-span-2">
              <Award className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">5 Yillik Tajriba</h3>
              <p className="text-blue-100">Ta'lim sohasida professional xizmat ko'rsatish tajribasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;