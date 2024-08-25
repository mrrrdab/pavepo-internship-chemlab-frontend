import React from 'react';

import deliveryImage from '@/assets/images/delivery.png';

import Layout from '../layout';
import { DeliveryInfoSection, DirectionsSection } from './components';

const DeliveryPage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <main className="px-26 mb-16">
          <div className="flex flex-col gap-16">
            <h1 className="text-5xl">Доставка</h1>
            <div className="flex flex-col gap-20">
              <DeliveryInfoSection />
              <DirectionsSection />
            </div>
          </div>
        </main>
        <div className="px-26">
          <img src={deliveryImage} alt="Image" className="w-full h-70 object-cover object-[50%_85%]" />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export { DeliveryPage };
