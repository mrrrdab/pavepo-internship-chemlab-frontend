/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import { ROUTES } from '@/constants';
import { getSpecialOffers } from '@/api/special-offers';

import { SpecialOfferItem } from './SpecialOfferItem';

const LIMIT = 3;

const SpecialOffersSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: specialOffers,
  } = useQuery(['special-offers'], () => getSpecialOffers({ limit: LIMIT }), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <section className="px-26">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl">Специальные предложения</h2>
        {specialOffers && (
          <Link
            to={ROUTES.SPECIAL_OFFERS}
            className="bg-primary text-white text-xl rounded-lg flex justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
          >
            <p className="font-medium">Смотреть еще</p>
            <img src={arrowRightWhiteIcon} alt="Arrow Right" />
          </Link>
        )}
      </div>
      {isLoading ? (
        <div className="w-fit mx-auto">
          <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
        </div>
      ) : isError ? (
        <div className="w-fit mx-auto">
          <p className="text-error text-2xl">Ошибка загрузки продуктов</p>
        </div>
      ) : (
        specialOffers && (
          <div className="grid grid-cols-3 gap-5">
            {specialOffers.products.map(offer => (
              <SpecialOfferItem
                key={offer.id}
                id={offer.id}
                productType={offer.productType}
                manufacturer={offer.manufacturer}
                model={offer.model}
                images={offer.images}
              />
            ))}
          </div>
        )
      )}
    </section>
  );
};

export { SpecialOffersSection };
