import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import ReactMarkdown from 'react-markdown';

import { Loader } from '@/components';
import { getBusinessSummarySection } from '@/api';

const BusinessSummarySection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: businessSummarySection,
    isLoading,
    isError,
  } = useQuery(['business-summary', i18n.language], () => getBusinessSummarySection(i18n.language), {
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

  if (isError || !businessSummarySection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="overflow-hidden">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16">
        {businessSummarySection.title}
      </h2>
      <div className="bg-primary flex flex-col xl:flex-row gap-8 xl:gap-5 px-8 md:px-14 lg:px-20 2xl:px-26 py-14">
        {businessSummarySection.businessSummaryItems.map(item => (
          <div key={item.id} className="flex-1 flex flex-col gap-4 2xl:gap-6">
            <p className="text-white text-xl 2xl:text-2xl border-b border-b-white">{item.title}</p>
            <div className="flex flex-col gap-6">
              <ReactMarkdown className="text-white text-xl 2xl:text-2xl">{item.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { BusinessSummarySection };
