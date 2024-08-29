/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { ROUTES } from '@/constants';
import { ProductBaseRecord } from '@/types';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components';

const SpecialOfferItem: React.FC<ProductBaseRecord> = ({ id, category, productType, manufacturer, model, images }) => {
  return (
    <Card className="flex flex-col gap-6">
      <CardContent className="bg-secondary rounded-xl flex justify-center items-center h-104 px-8 py-12">
        <img
          src={images.sort((a, b) => a.priority! - b.priority!)[0].url}
          alt={`${productType} ${model} ${manufacturer}`}
          className="w-full h-full object-contain"
        />
      </CardContent>
      <CardFooter className="flex xl:gap-6 3xl:justify-between items-center">
        <div className="flex flex-col gap-2 w-full 3xl:w-fit">
          <CardTitle className="text-2xl">
            <Link to={`${ROUTES[category]}/${id}`} className="hover:text-primary">
              {productType}
            </Link>
          </CardTitle>
          <CardDescription className="opacity-65 text-xl">
            {manufacturer} {model}
          </CardDescription>
        </div>
        <Link
          to={`${ROUTES[category]}/${id}`}
          className="group text-xl bg-white border border-black rounded-xl flex justify-center 2xl:justify-between items-center hover:bg-neutral-200 w-fit 2xl:w-full 3xl:w-60 h-15 p-8 2xl:px-5 2xl:py-2.5"
        >
          <p className="hidden 2xl:block">Подробнее</p>
          <div className="flex-shrink-0 bg-white border border-black text-neutral-900 rounded-3xl group-hover:bg-neutral-300 p-2.5">
            <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export { SpecialOfferItem };
