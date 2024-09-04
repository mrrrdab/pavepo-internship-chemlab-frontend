/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import { GetProductsDTO, PaginationQueryParams, ProductFiltersQueryParams } from '@/api';
import { Button, Loader } from '@/components';

import { ProductItem } from './ProductItem';

const LIMIT = 9;

type ProductsSectionProps = {
  filters?: ProductFiltersQueryParams & PaginationQueryParams;
  fetchProducts: (params: PaginationQueryParams, locale: string) => Promise<GetProductsDTO>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductsSection: React.FC<ProductsSectionProps> = ({ filters, fetchProducts, setIsLoading }) => {
  const { t, i18n } = useTranslation();

  const [page, setPage] = useState(1);
  const skip = (page - 1) * LIMIT;

  const {
    data: products,
    isLoading,
    isFetching,
    isError,
  } = useQuery(['products', page, filters, i18n.language], () => fetchProducts({ skip, take: LIMIT }, i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    if (setIsLoading) {
      setIsLoading(isFetching || isLoading);
    }
  }, [isFetching, isLoading]);

  const hasNext = products?.metadata.totalCount && products.metadata.totalCount > page * LIMIT;
  const totalPages = Math.ceil((products?.metadata.totalCount || 0) / LIMIT);

  const pageNumbers = [];
  for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) {
    pageNumbers.push(i);
  }

  if (isLoading || isFetching) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section>
      {products.data.length === 0 ? (
        <div className="flex flex-col gap-8 mx-auto">
          <div className="flex flex-col text-center gap-6">
            <h2 className="text-base 2xl:text-xl">{t('products_messages.no_products_found')}</h2>
          </div>
          <Link to={ROUTES.HOME} className="w-full">
            <Button
              variant="outline"
              borderRadius="lg"
              className="group flex justify-center xs:justify-between items-center w-1/2 sm:w-1/3 h-16 mx-auto"
            >
              <p className="hidden xs:block">{t('catalog_page.go_to_home_page_button')}</p>
              <div className="flex-shrink-0 bg-white border border-black text-neutral-900 rounded-3xl group-hover:bg-neutral-300 p-2.5">
                <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
              </div>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-10 2xl:gap-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-x-5 gap-y-6">
            {products.data.map(product => (
              <ProductItem
                key={product.id}
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
            ))}
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center">
              <Button
                variant="text"
                className={cn('flex-shrink-0 p-0 mr-5', page === 1 ? 'invisible' : '')}
                onClick={() => setPage(page - 1)}
              >
                <img src={arrowLeftDarkIcon} alt="Arrow Left" />
              </Button>
              <div className="grow flex gap-5 justify-center">
                {pageNumbers.map(num => (
                  <Button
                    key={num}
                    variant={num === page ? 'primary' : 'outline'}
                    className={cn(
                      'flex-shrink-0 flex items-center justify-center w-16 h-12 md:w-20 lg:h-14 xl:w-24 2xl:w-28 2xl:h-16',
                      num === page ? 'text-white' : '',
                    )}
                    onClick={() => setPage(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
              <Button
                variant="text"
                className={cn('flex-shrink-0 p-0 ml-5', !hasNext ? 'invisible' : '')}
                onClick={() => setPage(page + 1)}
              >
                <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { ProductsSection };
