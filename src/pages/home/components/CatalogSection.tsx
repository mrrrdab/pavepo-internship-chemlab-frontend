/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightWhiteIcon from '@/assets/icons/arrow-right-white.svg';
import catalogImageFirst from '@/assets/images/catalog-1.png';
import catalogImageSecond from '@/assets/images/catalog-2.png';
import { ROUTES } from '@/constants';

import { CatalogItem } from './CatalogItem';

// TODO: Scroll to top on page change
const CatalogSection: React.FC = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 2xl:px-26">
      <div className="flex justify-between items-center mb-16 overflow-hidden">
        <h2 className="text-5xl">Каталог</h2>
        <Link
          to={ROUTES.SPECIAL_OFFERS}
          className="hidden 2xl:flex bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="grid auto-rows-[17.5rem] grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-6 overflow-hidden">
        <Link to={ROUTES.LAB_EQUIPMENT} className="block">
          <CatalogItem title="Оборудование и Приборы" />
        </Link>
        <Link to={ROUTES.REAGENTS_STANDARTS} className="block">
          <CatalogItem title="Реактивы и Стандарты" />
        </Link>
        <div className="col-span-1 2xl:col-span-2 rounded-xl">
          <img src={catalogImageFirst} alt="Catalog Image" className="rounded-xl object-cover w-full h-full" />
        </div>
        <Link to={ROUTES.CLINIC_DIAGNISTICS} className="block">
          <CatalogItem title="Клиника и Диагностика" />
        </Link>
        <Link to={ROUTES.BIOCHEMISTRY_BIOTECHNOLOGY} className="block">
          <CatalogItem title="Биохимия и Биотехнологии" />
        </Link>
        <Link to={ROUTES.PHARMACEUTICALS} className="hidden sm:block">
          <CatalogItem title="Фармацевтика" />
        </Link>
        <Link to={ROUTES.VETERINARY} className="hidden sm:block">
          <CatalogItem title="Ветеринария" />
        </Link>
        <div className="col-span-1 2xl:col-span-2 rounded-xl">
          <img src={catalogImageSecond} alt="Catalog Image" className="rounded-xl object-cover w-full h-full" />
        </div>
        <Link to={ROUTES.COSMECEUTICALS} className="hidden xl:block">
          <CatalogItem title="Космецевтика" />
        </Link>
        <Link to={ROUTES.MICROELECTRONICS} className="hidden xl:block">
          <CatalogItem title="Микроэлектроника" />
        </Link>
      </div>
      <Link
        to={ROUTES.LAB_EQUIPMENT}
        className="flex 2xl:hidden bg-primary text-white text-xl rounded-lg justify-center items-center gap-4 hover:bg-primary-dark w-1/2 md:w-1/3 2xl:w-1/6 h-15 mx-auto mt-8"
      >
        <p className="hidden xs:block font-medium">Смотреть еще</p>
        <img src={arrowRightWhiteIcon} alt="Arrow Right" />
      </Link>
    </section>
  );
};

export { CatalogSection };
