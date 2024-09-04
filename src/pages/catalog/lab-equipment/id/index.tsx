import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import { ROUTES } from '@/constants';
import { getProduct } from '@/api';
import { Button, Loader } from '@/components';
import Layout from '@/pages/layout';

import { ProductDetailsTabs, ProductInfo, SimilarProductsSection } from '../../components';

const LabEquipmentProductPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(['product', id, i18n.language], () => getProduct(id!, i18n.language), {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <Layout>
      <div className="px-8 md:px-14 lg:px-20 2xl:px-26">
        {isLoading ? (
          <div className="w-fit mx-auto">
            <Loader />
          </div>
        ) : isError || !product ? (
          <div className="flex flex-col gap-8 w-1/3 mx-auto">
            <div className="flex flex-col text-center gap-6">
              <h2 className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</h2>
            </div>
            <Link to={ROUTES.LAB_EQUIPMENT} className="w-full">
              <Button
                variant="outline"
                borderRadius="lg"
                className="group flex justify-between items-center w-1/2 h-16 mx-auto"
              >
                <p>{t('catalog_page.go_to_catalog_button')}</p>
                <div className="bg-white border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
                  <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
                </div>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-20 md:gap-32 xl:gap-42 2xl:gap-50">
            <div className="flex flex-col gap-12 3xl:gap-16">
              <ProductInfo
                id={Number.parseInt(id!)}
                category={product.data.category}
                productType={product.data.productType}
                model={product.data.model}
                manufacturer={product.data.manufacturer}
                originCountries={product.data.originCountries}
                weight={product.data.weight}
                images={product.data.images}
                price={product.data.price}
                discount={product.data.discount}
                description={product.data.description}
              />
              <ProductDetailsTabs
                description={product.data.description}
                advantages={product.data.advantages}
                specs={product.data.specs}
                files={product.data.files}
                accessories={product.data.accessories}
                transportationData={product.data.transportationData}
              />
            </div>
            <SimilarProductsSection id={Number.parseInt(id!)} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export { LabEquipmentProductPage };
