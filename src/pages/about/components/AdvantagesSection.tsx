import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { Loader } from '@/components';
import { getAdvantagesSection } from '@/api';

const AdvantagesSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: advantagesSection,
    isError,
    isLoading,
  } = useQuery(['advantages', i18n.language], () => getAdvantagesSection(i18n.language), {
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

  if (isError || !advantagesSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        {advantagesSection.title}
      </h1>
      <div className="bg-primary flex flex-col xl:flex-row gap-5 xl:gap-8 px-8 md:px-14 lg:px-20 2xl:px-26 py-14">
        {advantagesSection.advantages.map(advantage => (
          <div key={advantage.id} className="flex-1 flex flex-col gap-4 xl:gap-6">
            <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">{advantage.title}</p>
            <div>
              <h4 className="text-white text-xl 2xl:text-2xl">{advantage.content}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { AdvantagesSection };
