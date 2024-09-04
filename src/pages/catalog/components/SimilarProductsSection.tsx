/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { getSimilarProducts, getSimilarProductsSection } from '@/api';
import { ProductBaseRecord } from '@/types';
import { Loader } from '@/components';

import { ProductItem } from './ProductItem';

const LIMIT = 10;

type SimilarProductsSectionProps = Pick<ProductBaseRecord, 'id'>;

const SimilarProductsSection: React.FC<SimilarProductsSectionProps> = ({ id }) => {
  const { t, i18n } = useTranslation();

  const {
    data: similarProductsSection,
    isLoading,
    isError,
  } = useQuery(['special-offers-section', i18n.language], () => getSimilarProductsSection(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    data: similarProducts,
    isLoading: isLoadingSimilarProducts,
    isError: isErrorSimilarProducts,
  } = useQuery(
    ['footer', id, LIMIT, i18n.language],
    () => getSimilarProducts(id.toString(), { take: LIMIT }, i18n.language),
    {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !similarProductsSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16">{similarProductsSection.title}</h2>
      {isLoadingSimilarProducts ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isErrorSimilarProducts || !similarProducts ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : similarProducts.data.length === 0 ? (
        <div className="w-fit mx-auto">
          <p className="text-xl 2xl:text-2xl">{t('products_messages.no_products_found')}</p>
        </div>
      ) : (
        <div className="flex flex-nowrap gap-5 overflow-x-auto">
          {similarProducts.data.map(product => (
            <div key={product.id} className="flex-1 min-w-96 max-w-96">
              <ProductItem
                id={product.id}
                category={product.category}
                productType={product.productType}
                model={product.model}
                manufacturer={product.manufacturer}
                originCountries={product.originCountries}
                weight={product.weight}
                images={product.images}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export { SimilarProductsSection };
