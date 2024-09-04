/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { getCatalogSection, getCategories } from '@/api';
import { Loader } from '@/components';

import { CatalogItem } from './CatalogItem';

const CatalogSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: catalogSection,
    isLoading,
    isError,
  } = useQuery(['catalog', i18n.language], () => getCatalogSection(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useQuery(['categories', i18n.language], () => getCategories(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading || isLoadingCategories) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !catalogSection || isErrorCategories || !categories) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <div className="flex justify-between items-center mb-10 2xl:mb-16 overflow-hidden">
        <h2 className="text-5xl">{catalogSection.title}</h2>
        <Link
          to={catalogSection.button.url}
          className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">{catalogSection.button.label}</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="grid auto-rows-[17.5rem] grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-6 overflow-hidden">
        <Link to={categories[0].url} className="block">
          <CatalogItem title={categories[0].title} />
        </Link>
        <Link to={categories[1].url} className="block">
          <CatalogItem title={categories[1].title} />
        </Link>
        <div className="col-span-1 2xl:col-span-2 rounded-xl">
          <img
            src={catalogSection.catalogImages[0].url}
            alt={catalogSection.catalogImages[0].alt}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <Link to={categories[2].url} className="block">
          <CatalogItem title={categories[2].title} />
        </Link>
        <Link to={categories[3].url} className="block">
          <CatalogItem title={categories[3].title} />
        </Link>
        <Link to={categories[4].url} className="hidden sm:block">
          <CatalogItem title={categories[4].title} />
        </Link>
        <Link to={categories[5].url} className="hidden sm:block">
          <CatalogItem title={categories[5].title} />
        </Link>
        <div className="col-span-1 2xl:col-span-2 rounded-xl">
          <img
            src={catalogSection.catalogImages[1].url}
            alt={catalogSection.catalogImages[1].alt}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <Link to={categories[6].url} className="hidden xl:block">
          <CatalogItem title={categories[6].title} />
        </Link>
        <Link to={categories[7].url} className="hidden xl:block">
          <CatalogItem title={categories[7].title} />
        </Link>
      </div>
      <Link
        to={catalogSection.button.url}
        className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
      >
        <p className="hidden xs:block font-medium">{catalogSection.button.label}</p>
        <img src={arrowRightWhiteIcon} alt="Arrow Right" />
      </Link>
    </section>
  );
};

export { CatalogSection };
