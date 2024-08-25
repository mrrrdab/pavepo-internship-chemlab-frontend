import { ProductCartRecord } from '@/types';

const getProductsFromStorage = (): ProductCartRecord[] => {
  return getFromStorage('chemlab-cart');
};

const putProductsToStorage = (products: ProductCartRecord[]) => {
  saveToStorage('chemlab-cart', products);
};

const saveToStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export { getProductsFromStorage, putProductsToStorage };
