import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { getContactsImage } from '@/api';
import { Loader } from '@/components';

import Layout from '../layout';
import { ContactsSection, DepartmentsSection } from './components';

const ContactsPage: React.FC = () => {
  const { t } = useTranslation();

  const {
    data: contactsImage,
    isLoading,
    isError,
  } = useQuery(['contacts-image'], () => getContactsImage(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <Layout>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError || !contactsImage ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : (
        <img
          src={contactsImage.url}
          alt={contactsImage.alt}
          className="w-full h-80 object-cover object-[50%_15%] mb-10 2xl:mb-16"
        />
      )}
      <main className="flex flex-col gap-20 2xl:gap-30 px-8 md:px-14 lg:px-20 2xl:px-26">
        <ContactsSection />
        <DepartmentsSection />
      </main>
    </Layout>
  );
};

export { ContactsPage };
