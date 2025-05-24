import React from 'react';
import { FileText, GlobeIcon } from 'lucide-react';
import { Footer, Button } from '../../components/ui';
import logoSiracusa from '../../assets/images/logo-siracusa.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-amber-50 p-6">
      <div className="max-w-md w-full mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
        {/* Header con logo y título */}
        <div className="bg-gradient-to-br from-green-800 to-green-900 text-white p-8 text-center">
          {/* Logo del hotel */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
              <img src={logoSiracusa} alt="Hotel Siracusa" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Hotel Siracusa</h1>
          <p className="text-green-100">Carta y Menú Internacional</p>
        </div>
        
        {/* Botones de idiomas */}
        <div className="p-6">
          <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-4 text-center">
            Seleccione su idioma / Select your language
          </h2>
          
          <div className="space-y-2">
            <Button 
              label="Menú Español" 
              href="/menu/es" 
              icon={<FileText className="w-5 h-5" />} 
            />
            
            <Button 
              label="Menu English" 
              href="/menu/en" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />
            
            <Button 
              label="Menu Français" 
              href="/menu/fr" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />
            
            <Button 
              label="Menü Deutsch" 
              href="/menu/de" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />

            <Button 
              label="Menu Italiano" 
              href="/menu/it" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />

            <Button 
              label="Меню на русском" 
              href="/menu/ru" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />

            <Button 
              label="中文菜单" 
              href="/menu/cn" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />

            <Button 
              label="日本語メニュー" 
              href="/menu/jp" 
              icon={<GlobeIcon className="w-5 h-5" />} 
            />
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <Footer customText="Escanee el código QR para acceder al menú" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;