import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { getDeliveryPage } from '@/api';
import { Loader } from '@/components';

import Layout from '../layout';
import { DeliveryInfoSection, DirectionsSection } from './components';

const DeliveryPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: deliveryPage,
    isLoading,
    isError,
  } = useQuery(['delivery-section', i18n.language], () => getDeliveryPage(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !deliveryPage) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <Layout>
      <main className="px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{deliveryPage.title}</h1>
          <div className="flex flex-col gap-10 2xl:gap-20">
            <DeliveryInfoSection
              deliverySectionTitle={deliveryPage.deliverySectionTitle}
              deliveryOptions={deliveryPage.deliveryOptions}
              deliveryDetails={deliveryPage.deliveryDetails}
            />
            <DirectionsSection directionsTitle={deliveryPage.directionsTitle} directions={deliveryPage.directions} />
          </div>
        </div>
      </main>
      <div className="px-8 md:px-14 lg:px-20 2xl:px-26">
        <img
          src={deliveryPage.image.url}
          alt={deliveryPage.image.alt}
          className="w-full h-70 object-cover object-[50%_85%]"
        />
      </div>
    </Layout>
  );
};

export { DeliveryPage };
