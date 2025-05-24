# Imágenes del Proyecto

Para agregar el logo del hotel:

1. Coloca la imagen del logo en este directorio (`public/`)
2. Nombra el archivo como `logo-hotel.jpg` o `logo-hotel.png`
3. La imagen debe ser cuadrada para verse bien en el círculo
4. Tamaño recomendado: 200x200px o mayor

Una vez que agregues la imagen, descomenta la línea en el archivo:
`src/features/menu/components/MenuPage.tsx` (línea ~97)

Cambia esto:
```jsx
{/* <img src="/logo-hotel.jpg" alt="Hotel Siracusa" className="w-full h-full object-cover" /> */}
```

Por esto:
```jsx
<img src="/logo-hotel.jpg" alt="Hotel Siracusa" className="w-full h-full object-cover" />
```

Y comenta o elimina el placeholder con el icono.