import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Aziza Karimova",
      position: "Toshkent Xususiy Universitetи Rektori",
      content: "EduMentor kompaniyasi bizga eng yaxshi mentorlarni taqdim etdi. Talabalarimizning academic ko'rsatkichlari sezilarli darajada yaxshilandi.",
      rating: 5
    },
    {
      name: "Bobur Rahimov",
      position: "Elit Maktabi Direktori",
      content: "Professional mentorlar bizning o'quvchilarimizning individual ehtiyojlariga javob berdi. Juda professional va samarali xizmat.",
      rating: 5
    },
    {
      name: "Nilufar Abdullayeva",
      position: "Future Leaders Ta'lim Markazi",
      content: "Mentorlarimiz nafaqat bilimli, balki o'quvchilar bilan ishlashda juda tajribali. Tavsiya etamiz!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mijozlarimiz Fikri
          </h2>
          <p className="text-xl text-gray-600">
            Bizning xizmatlarimizdan foydalanayotgan ta'lim muassasalari rahbarlari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;