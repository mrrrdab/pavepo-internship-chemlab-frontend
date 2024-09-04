import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { getCatalogImage } from '@/api';
import { Loader } from '@/components';

import BaseLayout from '../layout';
import { CategorySection } from './components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  const {
    data: catalogImage,
    isLoading,
    isError,
  } = useQuery(['catalog-image'], () => getCatalogImage(), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <BaseLayout>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError || !catalogImage ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : (
        <img
          src={catalogImage.url}
          alt={catalogImage.alt}
          className="w-full h-80 object-cover px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 2xl:mb-16"
        />
      )}
      <div className="px-8 md:px-14 lg:px-20 2xl:px-26 mb-10 xl:mb-32 2xl:mb-50">
        <CategorySection />
      </div>
      <main className="px-8 md:px-14 lg:px-20 2xl:px-26">{children}</main>
    </BaseLayout>
  );
};

export { Layout };
