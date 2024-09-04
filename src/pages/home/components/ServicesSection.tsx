/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { getServicesSection } from '@/api';
import { Loader } from '@/components';

import { ServiceItem } from './ServiceItem';

const ServicesSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: servicesSection,
    isLoading,
    isError,
  } = useQuery(['services', i18n.language], () => getServicesSection(i18n.language), {
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

  if (isError || !servicesSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{servicesSection.title}</h2>
      <div className="flex flex-row flex-nowrap overflow-auto 2xl:flex-col gap-6">
        {servicesSection.serviceItems.map(service => (
          <div key={service.id} className="flex-1 flex items-stretch min-w-96">
            <ServiceItem title={service.title} description={service.content} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ServicesSection };
