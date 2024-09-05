/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import { getSimilarProducts, getSimilarProductsSection } from '@/api';
import { ProductBaseRecord } from '@/types';
import { Button, Loader } from '@/components';

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

  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemWidth = () => {
      if (firstItemRef.current) {
        setItemWidth(firstItemRef.current.getBoundingClientRect().width);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => {
      window.removeEventListener('resize', updateItemWidth);
    };
  }, [similarProducts]);

  const handleScroll = (offset: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      const newScrollPosition = container.scrollLeft + offset * itemWidth;

      if (newScrollPosition < 0) {
        container.scrollLeft = 0;
      } else if (newScrollPosition > scrollWidth - containerWidth) {
        container.scrollLeft = scrollWidth - containerWidth;
      } else {
        container.scrollLeft = newScrollPosition;
      }
    }
  };

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
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl mb-10 2xl:mb-16 px-8 md:px-14 lg:px-20 2xl:px-26">
        {similarProductsSection.title}
      </h2>
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
        <div className="flex mx-8 2xl:mx-12">
          <Button variant="text" onClick={() => handleScroll(-1)} className="hidden md:block flex-shrink-0 p-0">
            <img src={arrowLeftDarkIcon} alt="Arrow Left" />
          </Button>
          <div ref={scrollContainerRef} className="whitespace-nowrap overflow-x-auto scroll-smooth w-full">
            {similarProducts.data.map(product => (
              <div
                key={product.id}
                className="inline-block whitespace-normal w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 h-full pl-5"
                ref={product.id === similarProducts.data[0].id ? firstItemRef : null}
              >
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
                  className="h-full"
                  imageStyles="bg-white"
                />
              </div>
            ))}
          </div>
          <Button variant="text" onClick={() => handleScroll(1)} className="hidden md:block flex-shrink-0 p-0 ml-5">
            <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
          </Button>
        </div>
      )}
    </section>
  );
};

export { SimilarProductsSection };
