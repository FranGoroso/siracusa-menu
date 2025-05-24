import { MenuData } from '../types';

export const russianMenu: MenuData = {
  title: 'Наше меню',
  sections: [
    {
      title: '🥪 Сэндвичи и бургеры',
      items: [
        { name: 'Ветчина и сыр', description: '', price: 5 },
        { name: 'Бекон', description: '', price: 5 },
        { name: 'Тунец', description: '', price: 5 },
        { name: 'Курица', description: '', price: 5 },
        { name: 'Свиная вырезка', description: '', price: 5 },
        { name: 'Ветчина', description: '', price: 5 },
        { name: 'Сыр', description: '', price: 5 },
        { name: 'Испанский омлет', description: '', price: 5 },
        { name: 'Фуэт (каталонская колбаса)', description: '', price: 5 },
        { name: 'Чоризо', description: '', price: 5 },
        { name: 'Вегетарианский', description: '', price: 5 },
        { name: 'Ботифарра (каталонская колбаса)', description: '', price: 5 },
        { name: 'Сэндвич "Сиракуза"', description: '', price: 6 },
        { name: 'Сэндвич с куриной котлетой', description: '', price: 7 },
        { name: 'Чизбургер', description: '', price: 6 },
        { name: 'Полный бургер', description: '', price: 6 },
        { name: 'Супер бургер', description: '', price: 7 },
      ]
    },
    {
      title: '🧀 Дополнения',
      items: [
        { name: 'Сыр', description: '', price: 1 },
        { name: 'Ветчина', description: '', price: 1 },
        { name: 'Помидор', description: '', price: 1 },
        { name: 'Яйцо', description: '', price: 1 },
      ]
    },
    {
      title: '🍽️ Основные блюда',
      items: [
        { name: 'Свиная вырезка с картофелем фри и салатом', description: '', price: 9 },
        { name: 'Куриная грудка с картофелем фри и салатом', description: '', price: 9 },
        { name: 'Ботифарра с картофелем фри и салатом', description: '', price: 9 },
        { name: 'Гамбургер с картофелем фри и салатом', description: '', price: 9 },
        { name: 'Дополнительное жареное яйцо (за штуку)', description: '', price: 1.5 },
      ]
    },
    {
      title: '🥗 Салаты',
      items: [
        { name: 'Каталонский салат', description: '', price: 6 },
        { name: 'Классический салат', description: '', price: 6 },
        { name: 'Салат Цезарь', description: '', price: 6 },
      ]
    },
    {
      title: '🍟 Гарниры',
      items: [
        { name: 'Картофель фри', description: '', price: 4 },
        { name: 'Острый картофель', description: '', price: 5 },
        { name: 'Пинчо из испанского омлета', description: '', price: 3 },
        { name: 'Пинчо из свиной вырезки с сырным соусом', description: '', price: 5 },
        { name: 'Крабовый салат', description: '', price: 5 },
        { name: 'Тарелка ботифарры с хлебом с помидором', description: '', price: 6 },
      ]
    },
    {
      title: '🧂 Дополнительные добавки',
      items: [
        { name: 'Хлеб, дополнительный соус и т.д.', description: '', price: 1 },
        { name: 'Пакетик чипсов (Lays, Doritos и т.д.)', description: '', price: 1.5 },
      ]
    },
    {
      title: '🌱 Специальные опции',
      items: [
        { name: '🥛 Без лактозы', description: 'Завтрак: Безлактозный хлеб с оливковым маслом и кофе с безлактозным молоком. Обед: Рыбный суп с рисом и фруктами.', price: 8 },
        { name: '🥦 Вегетарианское', description: 'Завтрак: Кофе с молоком, цельнозерновой хлеб, яичница-болтунья и нарезанные помидоры. Обед: Овощное рагу с рисом басмати и цельнозерновым хлебом.', price: 8 },
        { name: '🌾 Без глютена', description: 'Завтрак: Безглютеновые хлопья, безглютеновые тосты и джем. Обед: Куриная грудка в панировке, помидоры и картофель фри.', price: 8 },
      ]
    },
    {
      title: '🍳 Яичные блюда',
      items: [
        { name: 'Яичница-болтунья', description: '', price: 3 },
        { name: 'Яичница-глазунья', description: '', price: 3 },
        { name: 'Обычный омлет', description: '', price: 3 },
        { name: 'Испанский омлет', description: '', price: 3.5 },
      ]
    },
    {
      title: '👶 Детское меню',
      items: [
        { name: 'Куриная грудка или гамбургер с картофелем фри и салатом + десерт', description: '', price: 7 },
        { name: 'Рис, яичница и колбаса', description: '', price: 7 },
      ]
    },
    {
      title: '🥤 Безалкогольные напитки',
      items: [
        { name: 'Банка (Coca-Cola, Fanta, Sprite и т.д.)', description: '', price: 2 },
        { name: 'Биттер Kas', description: '', price: 2 },
        { name: 'Маленькая вода', description: '', price: 1.5 },
        { name: 'Большая вода', description: '', price: 2 },
        { name: 'Газированная вода', description: '', price: 2 },
      ]
    },
    {
      title: '🥤 Соки',
      items: [
        { name: 'Стакан (ананас, апельсин, персик)', description: '', price: 2 },
        { name: 'Свежевыжатый апельсиновый сок', description: '', price: 3 },
      ]
    },
    {
      title: '🍺 Пиво',
      items: [
        { name: 'Разливное', description: '', price: 2 },
        { name: 'Разливное с лимонадом', description: '', price: 2 },
        { name: 'Estrella Damm / Galicia (среднее)', description: '', price: 2.5 },
        { name: 'Free Damm (среднее)', description: '', price: 2.5 },
        { name: 'Voll-Damm (среднее)', description: '', price: 2.8 },
        { name: 'Heineken (среднее)', description: '', price: 2.8 },
        { name: '1906 (среднее)', description: '', price: 2.8 },
        { name: 'Нефильтрованное Águila', description: '', price: 2.8 },
        { name: 'Corona', description: '', price: 2.8 },
        { name: 'Desperados', description: '', price: 2.8 },
        { name: 'Estrella Damm / Galicia (маленькое)', description: '', price: 2 },
        { name: 'Free Damm (маленькое)', description: '', price: 2 },
        { name: 'Voll-Damm (маленькое)', description: '', price: 2.2 },
      ]
    },
    {
      title: '🍷 Вина',
      items: [
        { name: 'Alaja Cosecha (бокал / бутылка)', description: '', price: 2.5 },
        { name: 'Altaja Crianza (бокал / бутылка)', description: '', price: 2.8 },
        { name: 'Rioja (бокал / бутылка)', description: '', price: 3 },
        { name: 'Alaja Белое (бокал / бутылка)', description: '', price: 2.5 },
        { name: 'Delizia Белое (бокал / бутылка)', description: '', price: 2.8 },
        { name: 'Alaja Розовое (бокал / бутылка)', description: '', price: 2.5 },
      ]
    },
    {
      title: '🍾 Игристое вино',
      items: [
        { name: 'Roger de Flor (бокал / бутылка)', description: '', price: 3 },
      ]
    },
    {
      title: '🍸 Другие напитки',
      items: [
        { name: 'Коктейли (Фернет, джин-тоник, ром-кола, виски-кола и т.д.)', description: '', price: 6 },
        { name: 'Джин-тоник Bombay', description: '', price: 7 },
        { name: 'Виски', description: '', price: 5 },
        { name: 'Ликер', description: '', price: 4 },
        { name: 'Портвейн', description: '', price: 4 },
        { name: 'Мартини', description: '', price: 4 },
        { name: 'Пиво с Мартини', description: '', price: 4 },
        { name: 'Tinto de verano (с тоником или Sprite)', description: '', price: 3 },
        { name: 'Шот', description: '', price: 2 },
      ]
    },
    {
      title: '🐖 100% Иберийский хамон',
      items: [
        { name: 'Маленький бутерброд', description: '', price: 4 },
        { name: 'Тост', description: '', price: 3.5 },
        { name: 'Порция', description: '', price: 10 },
      ]
    },
    {
      title: '☕ Кофе',
      items: [
        { name: 'Эспрессо', description: '', price: 1.5 },
        { name: 'Американо', description: '', price: 1.5 },
        { name: 'Кофе с молоком', description: '', price: 1.7 },
        { name: 'Эспрессо с каплей молока', description: '', price: 1.6 },
        { name: 'Капучино', description: '', price: 2 },
        { name: 'Карахильо (Кофе с ликером)', description: '', price: 2 },
        { name: 'Бомбон (Кофе со сгущенным молоком)', description: '', price: 2 },
        { name: 'Кофе со сливками', description: '', price: 2 },
        { name: 'Горячий шоколад', description: '', price: 2 },
        { name: 'Травяные чаи', description: '', price: 1.8 },
        { name: 'Лед', description: '', price: 0.5 },
      ]
    },
    {
      title: '🥐 Завтрак и выпечка',
      items: [
        { name: 'Круассан', description: '', price: 1.5 },
        { name: 'Наполитана (Шоколадная выпечка)', description: '', price: 1.8 },
        { name: 'Круассан с ветчиной и сыром', description: '', price: 2.5 },
        { name: 'Тост с джемом и маслом', description: '', price: 2 },
        { name: 'Тост с оливковым маслом, помидором и сушеной ветчиной', description: '', price: 2.5 },
        { name: 'Тост с оливковым маслом и помидором', description: '', price: 2 },
        { name: 'Дополнительная выпечка', description: '', price: 1.5 },
      ]
    },
  ]
};