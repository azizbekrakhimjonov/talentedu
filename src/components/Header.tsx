import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 transition-colors ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              EduMentor
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Bosh sahifa', 'Xizmatlar', 'Biz haqimizda', 'Aloqa'].map((item, index) => {
              const sectionIds = ['hero', 'services', 'about', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-2 space-y-1">
              {['Bosh sahifa', 'Xizmatlar', 'Biz haqimizda', 'Aloqa'].map((item, index) => {
                const sectionIds = ['hero', 'services', 'about', 'contact'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionIds[index])}
                    className="block w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;