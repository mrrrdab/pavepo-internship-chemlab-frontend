import React from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { cn } from '@/utils';
import { getCategories } from '@/api';

import { Loader } from '../Loader';

type CatalogPopupProps = { isHomePage?: boolean; trigger: JSX.Element };

const CatalogPopup: React.FC<CatalogPopupProps> = ({ isHomePage = false, trigger }) => {
  const { t, i18n } = useTranslation();

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(['categories', i18n.language], () => getCategories(i18n.language), {
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

  if (isError || !categories) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <Popup trigger={trigger} arrow={false} position="bottom left">
      <div
        className={cn(
          'bg-white border rounded-xl grid grid-flow-col grid-rows-7 gap-4 px-5 py-6',
          isHomePage ? 'border-white' : 'border-black',
        )}
      >
        {categories.map(category => (
          <Link key={category.id} to={category.url} className="block text-xl hover:text-primary">
            {category.title}
          </Link>
        ))}
      </div>
    </Popup>
  );
};

export { CatalogPopup };
