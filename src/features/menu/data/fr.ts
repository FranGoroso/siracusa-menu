import { MenuData } from '../types';

export const frenchMenu: MenuData = {
  title: 'Notre Menu',
  sections: [
    {
      title: '🥪 Sandwichs & Burgers',
      items: [
        { name: 'Jambon & Fromage', description: '', price: 5 },
        { name: 'Bacon', description: '', price: 5 },
        { name: 'Thon', description: '', price: 5 },
        { name: 'Poulet', description: '', price: 5 },
        { name: 'Filet de porc', description: '', price: 5 },
        { name: 'Jambon', description: '', price: 5 },
        { name: 'Fromage', description: '', price: 5 },
        { name: 'Omelette espagnole', description: '', price: 5 },
        { name: 'Fuet (Saucisson catalan)', description: '', price: 5 },
        { name: 'Chorizo', description: '', price: 5 },
        { name: 'Végétal', description: '', price: 5 },
        { name: 'Botifarra (Saucisse catalane)', description: '', price: 5 },
        { name: 'Sandwich Siracusa', description: '', price: 6 },
        { name: 'Sandwich au poulet pané', description: '', price: 7 },
        { name: 'Hamburger au fromage', description: '', price: 6 },
        { name: 'Hamburger complet', description: '', price: 6 },
        { name: 'Super Hamburger', description: '', price: 7 },
      ]
    },
    {
      title: '🧀 Suppléments',
      items: [
        { name: 'Fromage', description: '', price: 1 },
        { name: 'Jambon', description: '', price: 1 },
        { name: 'Tomate', description: '', price: 1 },
        { name: 'Œuf', description: '', price: 1 },
      ]
    },
    {
      title: '🍽️ Plats Principaux',
      items: [
        { name: 'Filet de porc avec frites et salade', description: '', price: 9 },
        { name: 'Blanc de poulet avec frites et salade', description: '', price: 9 },
        { name: 'Botifarra avec frites et salade', description: '', price: 9 },
        { name: 'Hamburger avec frites et salade', description: '', price: 9 },
        { name: 'Supplément œuf au plat (par unité)', description: '', price: 1.5 },
      ]
    },
    {
      title: '🥗 Salades',
      items: [
        { name: 'Salade Catalane', description: '', price: 6 },
        { name: 'Salade Classique', description: '', price: 6 },
        { name: 'Salade César', description: '', price: 6 },
      ]
    },
    {
      title: '🍟 Accompagnements',
      items: [
        { name: 'Frites', description: '', price: 4 },
        { name: 'Pommes de terre épicées', description: '', price: 5 },
        { name: 'Pintxo d\'omelette espagnole', description: '', price: 3 },
        { name: 'Pintxo de filet de porc à la sauce au fromage', description: '', price: 5 },
        { name: 'Salade de crabe', description: '', price: 5 },
        { name: 'Assiette de botifarra sur pain à la tomate', description: '', price: 6 },
      ]
    },
    {
      title: '🧂 Suppléments additionnels',
      items: [
        { name: 'Pain, sauce supplémentaire, etc.', description: '', price: 1 },
        { name: 'Sachet de chips (Lays, Doritos, etc.)', description: '', price: 1.5 },
      ]
    },
    {
      title: '🌱 Options Spéciales',
      items: [
        { name: '🥛 Sans Lactose', description: 'Petit-déjeuner: Pain sans lactose avec huile d\'olive et café au lait sans lactose. Déjeuner: Soupe de poisson avec riz et fruit.', price: 8 },
        { name: '🥦 Végétarien', description: 'Petit-déjeuner: Café au lait, pain complet, œufs brouillés et tomate hachée. Déjeuner: Ratatouille avec riz basmati et pain complet.', price: 8 },
        { name: '🌾 Sans Gluten', description: 'Petit-déjeuner: Céréales sans gluten, toast sans gluten et confiture. Déjeuner: Blanc de poulet pané, tomate et frites.', price: 8 },
      ]
    },
    {
      title: '🍳 Spécialités aux Œufs',
      items: [
        { name: 'Œufs brouillés', description: '', price: 3 },
        { name: 'Œufs au plat', description: '', price: 3 },
        { name: 'Omelette nature', description: '', price: 3 },
        { name: 'Omelette espagnole', description: '', price: 3.5 },
      ]
    },
    {
      title: '👶 Menu Enfant',
      items: [
        { name: 'Blanc de poulet ou hamburger avec frites et salade + dessert', description: '', price: 7 },
        { name: 'Riz, œufs au plat et saucisse', description: '', price: 7 },
      ]
    },
    {
      title: '🥤 Boissons Fraîches',
      items: [
        { name: 'Canette (Coca-Cola, Fanta, Sprite, etc.)', description: '', price: 2 },
        { name: 'Bitter Kas', description: '', price: 2 },
        { name: 'Petite eau', description: '', price: 1.5 },
        { name: 'Grande eau', description: '', price: 2 },
        { name: 'Eau gazeuse', description: '', price: 2 },
      ]
    },
    {
      title: '🥤 Jus de Fruits',
      items: [
        { name: 'Verre (ananas, orange, pêche)', description: '', price: 2 },
        { name: 'Jus d\'orange frais', description: '', price: 3 },
      ]
    },
    {
      title: '🍺 Bières',
      items: [
        { name: 'Pression', description: '', price: 2 },
        { name: 'Panaché', description: '', price: 2 },
        { name: 'Estrella Damm / Galicia (moyenne)', description: '', price: 2.5 },
        { name: 'Free Damm (moyenne)', description: '', price: 2.5 },
        { name: 'Voll-Damm (moyenne)', description: '', price: 2.8 },
        { name: 'Heineken (moyenne)', description: '', price: 2.8 },
        { name: '1906 (moyenne)', description: '', price: 2.8 },
        { name: 'Águila non filtrée', description: '', price: 2.8 },
        { name: 'Corona', description: '', price: 2.8 },
        { name: 'Desperados', description: '', price: 2.8 },
        { name: 'Estrella Damm / Galicia (petite)', description: '', price: 2 },
        { name: 'Free Damm (petite)', description: '', price: 2 },
        { name: 'Voll-Damm (petite)', description: '', price: 2.2 },
      ]
    },
    {
      title: '🍷 Vins',
      items: [
        { name: 'Alaja Cosecha (verre / bouteille)', description: '', price: 2.5 },
        { name: 'Altaja Crianza (verre / bouteille)', description: '', price: 2.8 },
        { name: 'Rioja (verre / bouteille)', description: '', price: 3 },
        { name: 'Alaja Blanc (verre / bouteille)', description: '', price: 2.5 },
        { name: 'Delizia Blanc (verre / bouteille)', description: '', price: 2.8 },
        { name: 'Alaja Rosé (verre / bouteille)', description: '', price: 2.5 },
      ]
    },
    {
      title: '🍾 Cava',
      items: [
        { name: 'Roger de Flor (verre / bouteille)', description: '', price: 3 },
      ]
    },
    {
      title: '🍸 Autres Boissons',
      items: [
        { name: 'Cocktails (Fernet, gin tonic, rhum-cola, whisky-cola, etc.)', description: '', price: 6 },
        { name: 'Gin tonic Bombay', description: '', price: 7 },
        { name: 'Whisky', description: '', price: 5 },
        { name: 'Verre de liqueur', description: '', price: 4 },
        { name: 'Porto', description: '', price: 4 },
        { name: 'Martini', description: '', price: 4 },
        { name: 'Bière avec Martini', description: '', price: 4 },
        { name: 'Tinto de verano (avec tonic ou Sprite)', description: '', price: 3 },
        { name: 'Shot', description: '', price: 2 },
      ]
    },
    {
      title: '🐖 Jambon Ibérique 100%',
      items: [
        { name: 'Petit sandwich', description: '', price: 4 },
        { name: 'Toast', description: '', price: 3.5 },
        { name: 'Portion', description: '', price: 10 },
      ]
    },
    {
      title: '☕ Café',
      items: [
        { name: 'Expresso', description: '', price: 1.5 },
        { name: 'Américain', description: '', price: 1.5 },
        { name: 'Café au lait', description: '', price: 1.7 },
        { name: 'Noisette', description: '', price: 1.6 },
        { name: 'Cappuccino', description: '', price: 2 },
        { name: 'Carajillo (Café avec liqueur)', description: '', price: 2 },
        { name: 'Bombón (Café avec lait condensé)', description: '', price: 2 },
        { name: 'Café crème', description: '', price: 2 },
        { name: 'Chocolat chaud', description: '', price: 2 },
        { name: 'Infusions', description: '', price: 1.8 },
        { name: 'Glaçons', description: '', price: 0.5 },
      ]
    },
    {
      title: '🥐 Petit-déjeuner & Viennoiseries',
      items: [
        { name: 'Croissant', description: '', price: 1.5 },
        { name: 'Pain au chocolat', description: '', price: 1.8 },
        { name: 'Croissant jambon-fromage', description: '', price: 2.5 },
        { name: 'Toast avec confiture et beurre', description: '', price: 2 },
        { name: 'Toast avec huile d\'olive, tomate et jambon sec', description: '', price: 2.5 },
        { name: 'Toast avec huile d\'olive et tomate', description: '', price: 2 },
        { name: 'Viennoiserie supplémentaire', description: '', price: 1.5 },
      ]
    },
  ]
};