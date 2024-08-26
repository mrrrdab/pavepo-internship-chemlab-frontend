import React from 'react';

import { Layout } from '../layout';
import { ProductsSection } from '../components';
import { FiltersSection } from './components';

const LabEquipmentPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-5">
        <FiltersSection />
        <div className="flex-1">
          <ProductsSection />
        </div>
      </div>
    </Layout>
  );
};

export { LabEquipmentPage };
