import React, { useState } from 'react';

import { Button } from '@/components';

import Layout from '../layout';
import { CartContents, EmptyCartContents } from './components';

const ShoppingCartPage = () => {
  const [showCartContents, setShowCartContents] = useState(false);

  return (
    <React.Fragment>
      <Layout>
        <main className="px-26">
          <div className="flex flex-col gap-16">
            <div className="flex justify-between">
              <h1 className="text-5xl">Корзина</h1>
              <Button
                variant="text"
                className="opacity-50 self-end p-0"
                onClick={() => setShowCartContents(() => !showCartContents)}
              >
                Toggle Cart Content
              </Button>
            </div>
            <div>{showCartContents ? <CartContents /> : <EmptyCartContents />}</div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export { ShoppingCartPage };
