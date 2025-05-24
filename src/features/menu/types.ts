export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'ru' | 'cn' | 'jp';

export interface MenuData {
  title: string;
  sections: MenuSection[];
}

export type MenuDataRecord = Record<Language, MenuData>;