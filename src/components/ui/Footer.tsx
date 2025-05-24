import React from 'react';

interface FooterProps {
  customText?: string;
}

const Footer: React.FC<FooterProps> = ({ customText }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center text-xs text-gray-500">
      <p className="font-medium">© {currentYear} Hotel Siracusa</p>
      <p className="mt-0.5 text-gray-400">
        {customText || 'Escanee el código QR para ver nuestro menú'}
      </p>
    </footer>
  );
};

export default Footer;