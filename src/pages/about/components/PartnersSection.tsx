import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { getPartnersSection } from '@/api';
import { Loader } from '@/components';

const PartnersSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: partnersSection,
    isError,
    isLoading,
  } = useQuery(['partners-section', i18n.language], () => getPartnersSection(i18n.language), {
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

  if (isError || !partnersSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{partnersSection.title}</h1>
      <div className="flex flex-nowrap gap-8 overflow-auto h-80">
        {partnersSection.partners.map(partner => (
          <img
            key={partner.id}
            src={partner.image.url}
            alt={partner.image.alt}
            className="min-w-80 w-80 rounded h-full object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export { PartnersSection };
