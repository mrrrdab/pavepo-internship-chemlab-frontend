import React from 'react';

import { getSpecialOffers } from '@/api';

import { Layout } from '../layout';
import { ProductsSection } from '../components';

const SpecialOffersPage: React.FC = () => {
  return (
    <Layout>
      <ProductsSection fetchProducts={getSpecialOffers} />
    </Layout>
  );
};

export { SpecialOffersPage };
