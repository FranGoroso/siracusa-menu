import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Importaciones de componentes de la aplicación
import { HomePage } from './features/home';
import { MenuContainer } from './features/menu/components';

// Configuración del enrutador
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/menu/:lang',
    element: <MenuContainer />,
  },
]);

// Punto de entrada principal de la aplicación
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);