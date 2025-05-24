import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Footer } from '../../../components/ui';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100/50 p-6">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
        <Header 
          title="Hotel Siracusa" 
          subtitle="¡Oops! Algo salió mal" 
        />
        
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-6">
            Lo sentimos, no pudimos encontrar el menú que estás buscando.
          </p>
          
          <Button 
            label="Volver al inicio" 
            onClick={() => navigate('/')} 
            variant="primary"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;