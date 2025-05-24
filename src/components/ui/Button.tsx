import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  href, 
  icon, 
  variant = 'primary', 
  fullWidth = true,
  className = ''
}) => {
  const baseClasses = "flex items-center justify-between px-5 py-3.5 font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-amber-700 to-amber-800 text-white hover:from-amber-800 hover:to-amber-900 ring-1 ring-amber-700/20",
    secondary: "bg-gradient-to-r from-green-700 to-green-800 text-white hover:from-green-800 hover:to-green-900 ring-1 ring-green-700/20",
    outline: "bg-white border border-green-300 text-green-800 hover:bg-green-50 hover:border-green-400"
  };
  
  const widthClasses = fullWidth ? "w-full" : "";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClasses} ${className}`;

  const buttonContent = (
    <>
      <span className="flex-1 text-left">{label}</span>
      {icon ? <span className="ml-2">{icon}</span> : <ExternalLink className="w-5 h-5 ml-2" />}
    </>
  );

  if (href?.startsWith('/')) {
    return (
      <Link
        to={href}
        className={buttonClasses}
      >
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
};

export default Button;