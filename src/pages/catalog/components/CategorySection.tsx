/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { getCategories } from '@/api';
import { Loader } from '@/components';

import { CategoryItem } from './CategoryItem';

const CategorySection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: categories,
    isError,
    isLoading,
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

  const isActive = (route: string) => route === window.location.href;

  return (
    <section>
      <div className="grid gap-5 auto-rows-auto grid-flow-col xl:grid-flow-row xl:grid-rows-3 xl:grid-cols-12 overflow-auto">
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[0].title} linkTo={categories[0].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[1].title} linkTo={categories[1].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[2].title} linkTo={categories[2].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3">
          <CategoryItem title={categories[3].title} linkTo={categories[3].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem title={categories[4].title} linkTo={categories[4].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem title={categories[5].title} linkTo={categories[5].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem title={categories[6].title} linkTo={categories[6].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem title={categories[7].title} linkTo={categories[7].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem title={categories[8].title} linkTo={categories[8].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem title={categories[9].title} linkTo={categories[9].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-3">
          <CategoryItem title={categories[10].title} linkTo={categories[10].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[11].title} linkTo={categories[11].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[12].title} linkTo={categories[12].url} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title={categories[13].title} linkTo={categories[13].url} isActive={isActive} />
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
