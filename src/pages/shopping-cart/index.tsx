import React from 'react';

import { useCart } from '@/hooks';

import { CartContents, EmptyCartContents } from './components';
import Layout from '../layout';

const ShoppingCartPage: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <React.Fragment>
      <Layout>
        <main className="px-8 md:px-14 lg:px-20 2xl:px-26">
          <div className="flex flex-col gap-12 3xl:gap-16">
            <div className="flex justify-between">
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl">Корзина</h1>
            </div>
            <div>{cartItems.length ? <CartContents /> : <EmptyCartContents />}</div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { ShoppingCartPage };
