/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Card, CardContent, CardFooter, Loader } from '@/components';
import { getSuppliersSection } from '@/api';

import { SupplierItem } from './SupplierItem';

const SuppliersSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: suppliersSection,
    isLoading,
    isError,
  } = useQuery(['suppliers', i18n.language], () => getSuppliersSection(i18n.language), {
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

  if (isError || !suppliersSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26 overflow-hidden">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{suppliersSection.title}</h2>
      <div className="flex flex-col sm:flex-row gap-5">
        <Card className="hidden 2xl:flex flex-1 self-stretch bg-primary rounded-xl flex-col px-5 py-6 min-w-96 w-96">
          <CardContent>
            <p className="text-white text-base 2xl:text-xl">{suppliersSection.description}</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Link
              to={suppliersSection.button.url}
              className="group text-xl bg-white border border-black rounded-xl flex justify-between items-center hover:bg-neutral-200 w-full h-15 px-5 py-2.5"
            >
              <p>{suppliersSection.button.label}</p>
              <div className="bg-white border border-black text-neutral-900 rounded-3xl group-hover:bg-neutral-300 p-2.5">
                <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
              </div>
            </Link>
          </CardFooter>
        </Card>
        <div className="grid grid-cols-3 gap-x-5 gap-y-8">
          {suppliersSection.supplierItems.map(suplier => (
            <SupplierItem key={suplier.id} image={suplier.logo.url} alt={suplier.logo.alt} />
          ))}
        </div>
      </div>
      <Link
        to={suppliersSection.button.url}
        className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
      >
        <p className="hidden xs:block font-medium">{suppliersSection.button.label}</p>
        <img src={arrowRightWhiteIcon} alt="Arrow Right" />
      </Link>
    </section>
  );
};

export { SuppliersSection };
