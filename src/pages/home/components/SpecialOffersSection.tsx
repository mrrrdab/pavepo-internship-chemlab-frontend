/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import knifeMill from '@/assets/images/special-offer-knife-mill.png';
import spectrophotometer from '@/assets/images/special-offer-spectrophotometer.png';
import universalDispenser from '@/assets/images/special-offer-universal-dispenser.png';
import { ROUTES } from '@/constants';

import { SpecialOfferItem } from './SpecialOfferItem';

const SpecialOffersSection: React.FC = () => {
  return (
    <section className="px-26">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl">Специальные предложения</h2>
        <Link
          to={ROUTES.SPECIAL_OFFERS}
          className="bg-primary text-white text-xl rounded-lg flex justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <SpecialOfferItem image={knifeMill} title="Ножевая мельница" description="GRINDOMIX GM 200" />
        </div>
        <div className="flex-1">
          <SpecialOfferItem image={spectrophotometer} title="Спектрофотометр" description="Ultra-3660 UV-VIS" />
        </div>
        <div className="flex-1">
          <SpecialOfferItem image={universalDispenser} title="Универсальные дозаторы IKA" />
        </div>
      </div>
    </section>
  );
};

export { SpecialOffersSection };
