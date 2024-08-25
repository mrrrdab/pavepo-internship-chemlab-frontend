import React from 'react';

import { useCart } from '@/hooks';
import { Button } from '@/components';

import { ProductItem } from './ProductItem';
import { CartSummary } from './CartSummary';

const CartContents: React.FC = () => {
  const { cartItems, putProducts, selectedProductsQuantity, netPrice, discount, deliveryOptions } = useCart();

  const handleSelectAll = () => {
    if (cartItems.some(cartItem => !cartItem.selected)) {
      putProducts(cartItems.map(cartItem => ({ ...cartItem, selected: true })));
    } else {
      putProducts(cartItems.map(cartItem => ({ ...cartItem, selected: false })));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Button variant="text" className="underline p-0 mr-auto" onClick={handleSelectAll}>
        Выбрать все
      </Button>
      <div className="flex gap-12">
        <div className="grow">
          {cartItems
            .filter(product => product.quantity > 0)
            .map(product => (
              <ProductItem key={product.id} {...product} />
            ))}
        </div>
        <div className="w-1/3">
          <CartSummary
            productsCount={selectedProductsQuantity}
            netTotalPrice={netPrice}
            discount={discount}
            deliveryOptions={deliveryOptions}
          />
        </div>
      </div>
    </div>
  );
};

export { CartContents };
