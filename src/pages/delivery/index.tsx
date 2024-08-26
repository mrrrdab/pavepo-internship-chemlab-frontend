import React from 'react';

import deliveryImage from '@/assets/images/delivery.png';

import Layout from '../layout';
import { DeliveryInfoSection, DirectionsSection } from './components';

const DeliveryPage: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <main className="px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">Доставка</h1>
            <div className="flex flex-col gap-10 2xl:gap-20">
              <DeliveryInfoSection />
              <DirectionsSection />
            </div>
          </div>
        </main>
        <div className="px-8 md:px-14 lg:px-20 2xl:px-26">
          <img src={deliveryImage} alt="Image" className="w-full h-70 object-cover object-[50%_85%]" />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export { DeliveryPage };
