import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronUp, Home, UtensilsCrossed, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MenuData } from '../types';
import { Header, Footer, Button } from '../../../components/ui';
import MenuSection from './MenuSection';
import logoSiracusa from '../../../assets/images/logo-siracusa.jpg';

interface MenuPageProps {
  data: MenuData;
}

const MenuPage: React.FC<MenuPageProps> = ({ data }) => {
  const navigate = useNavigate();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [showCategories, setShowCategories] = useState(false);

  // Detectar cuando el scroll pasa cierto punto para mostrar botón "volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Detectar sección activa
      const scrollPosition = window.scrollY + 100;
      for (const [key, ref] of Object.entries(sectionRefs.current)) {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef) {
      const offset = 140; // Reducido para el header más pequeño
      const elementPosition = sectionRef.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Cerrar el menú de categorías después de seleccionar
      setShowCategories(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Agrupar secciones por tipo para mejor organización en el menú de navegación
  const groupedSections = {
    food: data.sections.filter(s => 
      s.title.includes('🥪') || s.title.includes('🍽️') || s.title.includes('🥗') || 
      s.title.includes('🍟') || s.title.includes('🍳') || s.title.includes('👶')),
    drinks: data.sections.filter(s => 
      s.title.includes('🥤') || s.title.includes('🍺') || s.title.includes('🍷') || 
      s.title.includes('🍾') || s.title.includes('🍸') || s.title.includes('☕')),
    other: data.sections.filter(s => 
      s.title.includes('🧀') || s.title.includes('🧂') || s.title.includes('🌱') || 
      s.title.includes('🐖') || s.title.includes('🥐'))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-amber-50">
      <button 
        onClick={() => navigate('/')}
        className="fixed top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-50 border border-green-200"
        aria-label="Go back"
      >
        <Home className="w-5 h-5 text-green-800" />
      </button>
      
      {/* Botón para volver arriba cuando el scroll baja */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2.5 bg-green-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
      )}
      
      <div className="max-w-xl w-full mx-auto px-3 pb-6">
        {/* Header con navegación sticky - más compacto */}
        <div className="sticky top-0 z-40 mb-4">
          <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-4 px-4">
              <h1 className="text-xl font-bold text-center">Hotel Siracusa</h1>
              <p className="text-xs text-center text-green-100 mt-0.5">{data.title}</p>
            </div>

            {/* Botón de categorías con logo integrado */}
            <div className="p-3 bg-amber-50 border-t border-amber-200">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-3 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between font-medium"
              >
                <div className="flex items-center gap-3">
                  {/* Logo pequeño dentro del botón */}
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={logoSiracusa} alt="Hotel Siracusa" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm">Ver Categorías del Menú</span>
                </div>
                <Menu className={`w-5 h-5 transition-transform duration-200 ${showCategories ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Panel de categorías expandible */}
            {showCategories && (
              <div className="bg-white border-t border-green-200 p-4 animate-fade-in">
                {/* Comida */}
                {groupedSections.food.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-xs uppercase tracking-wide text-green-700 font-semibold mb-2">Comida</h3>
                    <div className="flex flex-wrap gap-2">
                      {groupedSections.food.map((section, idx) => {
                        const sectionIndex = data.sections.findIndex(s => s.title === section.title);
                        const titleParts = section.title.split(' ');
                        const emoji = titleParts[0];
                        const name = titleParts.slice(1).join(' ');
                        const isActive = activeSection === `section-${sectionIndex}`;
                        
                        return (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(`section-${sectionIndex}`)}
                            className={`${
                              isActive 
                                ? 'bg-green-800 text-white border-green-800' 
                                : 'bg-white hover:bg-green-50 text-green-900 border-green-300'
                            } px-3 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center shadow-sm hover:shadow-md border`}
                          >
                            <span className="mr-1.5 text-base">{emoji}</span>
                            <span className="font-medium">{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Bebidas */}
                {groupedSections.drinks.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-xs uppercase tracking-wide text-green-700 font-semibold mb-2">Bebidas</h3>
                    <div className="flex flex-wrap gap-2">
                      {groupedSections.drinks.map((section, idx) => {
                        const sectionIndex = data.sections.findIndex(s => s.title === section.title);
                        const titleParts = section.title.split(' ');
                        const emoji = titleParts[0];
                        const name = titleParts.slice(1).join(' ');
                        const isActive = activeSection === `section-${sectionIndex}`;
                        
                        return (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(`section-${sectionIndex}`)}
                            className={`${
                              isActive 
                                ? 'bg-green-800 text-white border-green-800' 
                                : 'bg-white hover:bg-green-50 text-green-900 border-green-300'
                            } px-3 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center shadow-sm hover:shadow-md border`}
                          >
                            <span className="mr-1.5 text-base">{emoji}</span>
                            <span className="font-medium">{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Otros */}
                {groupedSections.other.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-green-700 font-semibold mb-2">Otros</h3>
                    <div className="flex flex-wrap gap-2">
                      {groupedSections.other.map((section, idx) => {
                        const sectionIndex = data.sections.findIndex(s => s.title === section.title);
                        const titleParts = section.title.split(' ');
                        const emoji = titleParts[0];
                        const name = titleParts.slice(1).join(' ');
                        const isActive = activeSection === `section-${sectionIndex}`;
                        
                        return (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(`section-${sectionIndex}`)}
                            className={`${
                              isActive 
                                ? 'bg-green-800 text-white border-green-800' 
                                : 'bg-white hover:bg-green-50 text-green-900 border-green-300'
                            } px-3 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center shadow-sm hover:shadow-md border`}
                          >
                            <span className="mr-1.5 text-base">{emoji}</span>
                            <span className="font-medium">{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Contenido del menú */}
        <div className="bg-white rounded-2xl shadow-lg p-5 space-y-8">
          {data.sections.map((section, index) => (
            <div 
              key={index}
              ref={(el) => { sectionRefs.current[`section-${index}`] = el; }}
              id={`section-${index}`}
              className="scroll-mt-24"
            >
              <MenuSection section={section} />
            </div>
          ))}
          
          <div className="pt-8 border-t border-green-200">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;