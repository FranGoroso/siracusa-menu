import React from 'react';
import { useParams } from 'react-router-dom';
import { menuData } from '../data';
import { Language } from '../types';
import MenuPage from './MenuPage';
import ErrorPage from './ErrorPage';

const MenuContainer: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang: Language }>();
  
  // Verificar si el idioma es válido
  if (!Object.keys(menuData).includes(lang)) {
    return <ErrorPage />;
  }

  return <MenuPage data={menuData[lang as Language]} />;
};

export default MenuContainer;