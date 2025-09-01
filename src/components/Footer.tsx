import React from 'react';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">EduMentor</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional mentorlik xizmatlari orqali ta'lim sifatini oshirish va 
              o'quvchilarning individual rivojlanishiga yordam berish bizning asosiy maqsadimiz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+998 94 930 30 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">matchanovm22@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Xizmatlar</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Universitet Mentorligi
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Maktab Mentorligi
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Ta'lim Markazi Yordami
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Individual Dasturlar
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kompaniya</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Biz Haqimizda
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Bizning Jamoamiz
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Mijozlar Fikri
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Aloqa
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>© {currentYear} EduMentor. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2 text-sm">
              Professional mentorlik xizmatlari | Mukhammad Matchanov boshchiligida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;