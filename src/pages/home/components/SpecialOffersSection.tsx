/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import arrowLeftDarkIcon from '@/assets/icons/arrow-left-dark.svg';
import arrowRightDarkMediumIcon from '@/assets/icons/arrow-right-dark-md.svg';
import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { getSpecialOffers, getSpecialOffersSection } from '@/api';
import { Button, Loader } from '@/components';

import { SpecialOfferItem } from './SpecialOfferItem';

const LIMIT = 9;

const SpecialOffersSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const {
    data: specialOffersSection,
    isLoading,
    isError,
  } = useQuery(['special-offers-section', i18n.language], () => getSpecialOffersSection(i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const {
    data: specialOffers,
    isLoading: isLoadingSpecialOffers,
    isError: isErrorSpecialOffers,
  } = useQuery(['special-offers', i18n.language], () => getSpecialOffers({ take: LIMIT }, i18n.language), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

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
  }, [specialOffers]);

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

  if (isError || !specialOffersSection) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-10 2xl:mb-16 overflow-hidden px-8 md:px-14 lg:px-20 2xl:px-26">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl">{specialOffersSection.title}</h2>
        {specialOffers && (
          <Link
            to={specialOffersSection.button.url}
            className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
          >
            <p className="font-medium">{specialOffersSection.button.label}</p>
            <img src={arrowRightWhiteIcon} alt="Arrow Right" />
          </Link>
        )}
      </div>
      {isLoadingSpecialOffers ? (
        <div className="w-fit mx-auto">
          <Loader />
        </div>
      ) : isErrorSpecialOffers || !specialOffers ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-xl 2xl:text-2xl">{t('common_messages.server_error')}</p>
        </div>
      ) : specialOffers.data.length === 0 ? (
        <p className="text-base 2xl:text-xl">{t('products_messages.no_products_found')}</p>
      ) : (
        <div className="flex mx-8 2xl:mx-12">
          <Button variant="text" onClick={() => handleScroll(-1)} className="hidden md:block flex-shrink-0 p-0">
            <img src={arrowLeftDarkIcon} alt="Arrow Left" />
          </Button>
          <div ref={scrollContainerRef} className="whitespace-nowrap overflow-x-auto scroll-smooth w-full">
            {specialOffers.data.map(offer => (
              <div
                key={offer.id}
                className="inline-block whitespace-normal w-full md:w-1/2 2xl:w-1/3 3xl:w-1/4 min-h-96 pl-5"
                ref={offer.id === specialOffers.data[0].id ? firstItemRef : null}
              >
                <SpecialOfferItem
                  id={offer.id}
                  category={offer.category}
                  productType={offer.productType}
                  manufacturer={offer.manufacturer}
                  model={offer.model}
                  images={offer.images}
                  offerLinkTitle={specialOffersSection.offerLinkTitle}
                />
              </div>
            ))}
          </div>
          <Button variant="text" onClick={() => handleScroll(1)} className="hidden md:block flex-shrink-0 p-0 ml-5">
            <img src={arrowRightDarkMediumIcon} alt="Arrow Right" />
          </Button>
        </div>
      )}
      {specialOffers && (
        <Link
          to={specialOffersSection.button.url}
          className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
        >
          <p className="hidden xs:block font-medium">{specialOffersSection.button.label}</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      )}
    </section>
  );
};

export { SpecialOffersSection };
