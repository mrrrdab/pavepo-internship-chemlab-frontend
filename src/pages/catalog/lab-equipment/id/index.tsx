import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import { ROUTES } from '@/constants';
import { getLabEquipmentProduct } from '@/api';
import { Button } from '@/components';
import Layout from '@/pages/layout';

import { ProductDetailsTabs, ProductInfo } from './components';
import { NewsSection } from './components/NewsSection';
import { SimilarProductsSection } from './components/SimilarProductsSection';

const LabEquipmentProductPage: React.FC = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(['product', id], () => getLabEquipmentProduct(id!), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <Layout>
      <div className="px-8 md:px-14 lg:px-20 2xl:px-26">
        {isLoading ? (
          <div className="w-fit mx-auto">
            <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
          </div>
        ) : isError ? (
          <div className="flex flex-col gap-8 w-1/3 mx-auto">
            <div className="flex flex-col text-center gap-6">
              <h2 className="text-error text-xl 2xl:text-2xl">Ошибка загрузки данных товара</h2>
            </div>
            <Link to={ROUTES.LAB_EQUIPMENT} className="w-full">
              <Button
                variant="outline"
                borderRadius="lg"
                className="group flex justify-between items-center w-1/2 h-16 mx-auto"
              >
                <p>В каталог</p>
                <div className="bg-white border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
                </div>
              </Button>
            </Link>
          </div>
        ) : (
          product && (
            <div className="flex flex-col gap-20 md:gap-32 xl:gap-42 2xl:gap-50">
              <div className="flex flex-col gap-12 3xl:gap-16">
                <ProductInfo {...product} />
                <ProductDetailsTabs {...product} />
              </div>
              <SimilarProductsSection />
              <NewsSection />
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export { LabEquipmentProductPage };
