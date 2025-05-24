import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      {subtitle && <p className="text-sm text-white/90">{subtitle}</p>}
    </div>
  );
};

export default Header;