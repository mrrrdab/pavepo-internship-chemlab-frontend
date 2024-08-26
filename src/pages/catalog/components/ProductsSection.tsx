/* eslint-disable max-len */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import { getLabEquipmentProducts } from '@/api';
import { Button } from '@/components';

import { ProductItem } from './ProductItem';

const LIMIT = 9;

const ProductsSection: React.FC = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery(
    ['lab-equipment-products', page, LIMIT],
    () => getLabEquipmentProducts({ page, limit: LIMIT }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );

  const hasNext = data?.totalCount && data.totalCount > page * LIMIT;
  const totalPages = Math.ceil((data?.totalCount || 0) / LIMIT);

  const pageNumbers = [];
  for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) {
    pageNumbers.push(i);
  }

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки продуктов</p>
      </div>
    );
  }

  return (
    <section>
      {data &&
        (data.products.length === 0 ? (
          <div className="flex flex-col gap-8 w-2/5 mx-auto">
            <div className="flex flex-col text-center gap-6">
              <h2 className="text-2xl">В настоящий момент в данной категории нет товаров</h2>
            </div>
            <Link to={ROUTES.HOME} className="w-full">
              <Button
                variant="outline"
                borderRadius="lg"
                className="flex justify-between items-center w-1/2 h-16 mx-auto"
              >
                <p>На главную</p>
                <div className="bg-white border border-black rounded-3xl p-2.5">
                  <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
                </div>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-3 gap-x-5 gap-y-6">
              {data.products.map(product => (
                <ProductItem
                  key={product.id}
                  id={product.id}
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
              <div className="flex items-center w-1/3">
                <Button
                  variant="text"
                  className={cn('flex-shrink-0 p-0 mr-5', page === 1 ? 'invisible' : '')}
                  onClick={() => setPage(page - 1)}
                >
                  <img src={arrowLeftDarkIcon} alt="Arrow Left" />
                </Button>
                <div className="flex gap-5 flex-grow justify-center">
                  {pageNumbers.map(num => (
                    <Button
                      key={num}
                      variant={num === page ? 'primary' : 'outline'}
                      className={cn(
                        'flex-shrink-0 flex items-center justify-center w-28 h-16',
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
        ))}
    </section>
  );
};

export { ProductsSection };
