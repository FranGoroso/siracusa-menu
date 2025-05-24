import React from 'react';
import { MenuItem as MenuItemType, MenuSection } from '../types';

interface MenuSectionProps {
  section: MenuSection;
}

const MenuSectionComponent: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-green-900 flex items-center">
        <span className="bg-gradient-to-r from-amber-100 to-green-100 px-3 py-1 rounded-lg border border-green-200 shadow-sm">
          {section.title}
        </span>
      </h2>
      <div className="grid gap-2.5">
        {section.items.map((item, itemIndex) => (
          <MenuItem key={itemIndex} item={item} />
        ))}
      </div>
    </div>
  );
};

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div 
      className="flex justify-between items-start p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 border border-transparent hover:border-green-200"
    >
      <div className="flex-1 pr-3">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">{item.name}</h3>
        {item.description && (
          <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="text-right flex-shrink-0">
        <span className="inline-block bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
          {item.price}€
        </span>
      </div>
    </div>
  );
};

export default MenuSectionComponent;