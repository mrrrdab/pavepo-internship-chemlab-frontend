import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DeleteProductCartRecord, ProductCartRecord, UpdateProductCartRecord } from '@/types';
import { getProductsFromStorage, putProductsToStorage } from '@/utils';
import { GetDeliveryOptionDTO, getDeliveryOptions } from '@/api';

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cartItems: ProductCartRecord[];
  putProduct: (product: ProductCartRecord) => void;
  updateProduct: (product: UpdateProductCartRecord) => void;
  deleteProduct: (product: DeleteProductCartRecord) => void;
  putProducts: (products: ProductCartRecord[]) => void;
  deleteProducts: () => void;
  selectedProductsQuantity: number;
  netPrice: number;
  discount: number;
  deliveryOptions?: GetDeliveryOptionDTO[];
};

const CartContext = createContext<CartContextType>({} as CartContextType);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [cartItems, setCartItems] = useState<ProductCartRecord[]>(() => getProductsFromStorage() || []);

  const [deliveryOptions, setDeliveryOptions] = useState<GetDeliveryOptionDTO[] | null>(null);

  useEffect(() => {
    deleteProducts();
  }, [i18n.language]);

  useEffect(() => {
    const fetchDeliveryOptions = async () => {
      try {
        const options = await getDeliveryOptions(i18n.language);
        setDeliveryOptions(options);
      } catch (error) {
        console.error('Failed to fetch delivery options:', error);
      }
    };

    fetchDeliveryOptions();
  }, [i18n.language]);

  const selectedProductsQuantity = cartItems.filter(cartItem => cartItem.selected).length;
  const netPrice = cartItems.reduce((sum, item) => (item.selected ? sum + item.price * item.quantity : sum), 0);
  const discount = cartItems.reduce(
    (discount, item) => (item.selected ? discount + item.discount * item.quantity : discount),
    0,
  );

  const putProduct = (product: ProductCartRecord) => {
    const existingProductIndex = cartItems.findIndex(p => p.id === product.id);

    if (existingProductIndex >= 0) {
      cartItems[existingProductIndex] = product;
    } else {
      cartItems.push(product);
    }

    setCartItems(() => [...cartItems]);
    putProductsToStorage(cartItems);
  };

  const updateProduct = (product: UpdateProductCartRecord) => {
    const productToUpdate = cartItems.find(p => p.id === product.id);

    if (productToUpdate) {
      if (product.quantity !== undefined) {
        productToUpdate.quantity = product.quantity;
      }
      if (product.selected !== undefined) {
        productToUpdate.selected = product.selected;
      }
    }

    setCartItems(() => [...cartItems]);
    putProductsToStorage(cartItems);
  };

  const deleteProduct = (product: DeleteProductCartRecord) => {
    const newCartItems = cartItems.filter(cartItem => cartItem.id !== product.id);
    setCartItems(newCartItems);
    putProductsToStorage(newCartItems);
  };

  const putProducts = (products: ProductCartRecord[]) => {
    setCartItems(products);
    putProductsToStorage(products);
  };

  const deleteProducts = () => {
    putProductsToStorage([]);
    setCartItems([]);
  };

  const value: CartContextType = {
    cartItems,
    putProduct,
    updateProduct,
    deleteProduct,
    putProducts,
    deleteProducts,
    selectedProductsQuantity,
    netPrice,
    discount,
  };

  if (deliveryOptions) {
    value.deliveryOptions = deliveryOptions;
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
