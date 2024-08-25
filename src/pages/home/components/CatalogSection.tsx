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
    <section className="px-26">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl">Каталог</h2>
        <Link
          to={ROUTES.SPECIAL_OFFERS}
          className="bg-primary text-white text-xl rounded-lg flex justify-center items-center gap-4 hover:bg-primary-dark w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="grid auto-rows-[17.5rem] grid-cols-4 gap-x-5 gap-y-6">
        <Link to={ROUTES.LAB_EQUIPMENT} className="block">
          <CatalogItem title="Оборудование и Приборы" />
        </Link>
        <Link to={ROUTES.REAGENTS_STANDARTS} className="block">
          <CatalogItem title="Реактивы и Стандарты" />
        </Link>
        <div className="col-span-2">
          <img src={catalogImageFirst} alt="Catalog Image" className="col-span-2 object-cover w-full h-full" />
        </div>
        <Link to={ROUTES.CLINIC_DIAGNISTICS} className="block">
          <CatalogItem title="Клиника и Диагностика" />
        </Link>
        <Link to={ROUTES.BIOCHEMISTRY_BIOTECHNOLOGY} className="block">
          <CatalogItem title="Биохимия и Биотехнологии" />
        </Link>
        <Link to={ROUTES.PHARMACEUTICALS} className="block">
          <CatalogItem title="Фармацевтика" />
        </Link>
        <Link to={ROUTES.VETERINARY} className="block">
          <CatalogItem title="Ветеринария" />
        </Link>
        <div className="col-span-2">
          <img src={catalogImageSecond} alt="Catalog Image" className="col-span-2 object-cover w-full h-full" />
        </div>
        <Link to={ROUTES.COSMECEUTICALS} className="block">
          <CatalogItem title="Космецевтика" />
        </Link>
        <Link to={ROUTES.MICROELECTRONICS} className="block">
          <CatalogItem title="Микроэлектроника" />
        </Link>
      </div>
    </section>
  );
};

export { CatalogSection };
