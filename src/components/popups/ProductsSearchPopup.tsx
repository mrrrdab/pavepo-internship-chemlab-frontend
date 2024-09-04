/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/constants';
import { cn } from '@/utils';
import { useSearch } from '@/hooks';
import { getProducts, GetProductsDTO } from '@/api';

import { Loader } from '../Loader';

const LIMIT = 5;

type ProductsSearchPopupProps = {
  isHomePage: boolean;
  searchQuery: string;
  open?: boolean;
};

const ProductsSearchPopup: React.FC<ProductsSearchPopupProps> = ({ isHomePage = false, searchQuery, open = false }) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { setSearchQuery } = useSearch();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<GetProductsDTO>(
    ['products', searchQuery, i18n.language],
    () => {
      const [productType, model] = searchQuery.split(', ').map(str => str.trim());
      return getProducts({ productType, model, take: LIMIT }, i18n.language);
    },
    {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  );

  const handleViewMore = () => {
    setSearchQuery(searchQuery);
    const queryParams = new URLSearchParams({ searchParams: searchQuery }).toString();
    navigate(`${ROUTES.PRODUCTS_SEARCH}?${queryParams}`);
  };

  if (!open) return null;

  return (
    <div
      ref={popupRef}
      className={cn(
        'w-full absolute mt-2.5 bg-white border rounded-xl flex gap-4 px-5 py-4 z-20 overflow-hidden',
        isHomePage ? 'border-white' : 'border-black',
      )}
    >
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isError || !products ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : products.data.length === 0 ? (
        <div className="w-fit mx-auto">
          <p className="text-xl 2xl:text-2xl">{t('products_messages.no_products_found')}</p>
        </div>
      ) : (
        products.data.length > 0 && (
          <div className="flex flex-col gap-2.5 w-full">
            <ul className="flex flex-col gap-5 w-full">
              {products.data.map(product => (
                <Link to={`${ROUTES[product.category]}/${product.id}`} key={product.id}>
                  <li>
                    <p className="text-base 2xl:text-xl border-b-[0.5px] border-y-neutral-900/50 pb-1 hover:text-primary">
                      {product.productType}, {product.model}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
            {products.data.length < products.metadata.totalCount && (
              <button
                onClick={handleViewMore}
                className="self-end hover:text-neutral-600 opacity-65 text-base 2xl:text-xl"
              >
                {t('global_search_form.see_more_button')}
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};

export { ProductsSearchPopup };
