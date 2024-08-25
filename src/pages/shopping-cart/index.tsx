import React from 'react';

import { useCart } from '@/hooks';

import { CartContents, EmptyCartContents } from './components';
import Layout from '../layout';

const ShoppingCartPage: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <React.Fragment>
      <Layout>
        <main className="px-26">
          <div className="flex flex-col gap-16">
            <div className="flex justify-between">
              <h1 className="text-5xl">Корзина</h1>
            </div>
            <div>{cartItems.length ? <CartContents /> : <EmptyCartContents />}</div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { ShoppingCartPage };
