const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  LAB_EQUIPMENT: '/catalog/lab-equipment',
  DELIVERY: '/delivery',
  ABOUT: '/about',
  CONTACTS: '/contacts',
  SHOPPING_CART: '/shopping-cart',
  CHECKOUT: '/checkout',
} as const;

const ROUTE_SEGMENTS_LABELS: Record<string, string> = {
  '': 'Главная',
  catalog: 'Каталог',
  'lab-equipment': 'Лабораторное оборудование',
  delivery: 'Доставка',
  about: 'О Нас',
  contacts: 'Контакты',
  'shopping-cart': 'Корзина',
  checkout: 'Оформление заказа',
};

export { ROUTES, ROUTE_SEGMENTS_LABELS };
