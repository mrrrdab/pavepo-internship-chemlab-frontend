import React from 'react';

import { Layout } from '../layout';
import { ProductsSection } from '../components';
import { FiltersSection } from './components';

const LabEquipmentPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex gap-5">
        <div className="w-[22%]">
          <FiltersSection />
        </div>
        <div className="flex-1">
          <ProductsSection />
        </div>
      </div>
    </Layout>
  );
};

export { LabEquipmentPage };
