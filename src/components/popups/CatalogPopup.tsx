import React from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'reactjs-popup';

import { ROUTES } from '@/constants';
import { cn } from '@/utils';

const categories = [
  {
    title: 'Акции',
    link: ROUTES.SPECIAL_OFFERS,
  },
  {
    title: 'Поставщики',
    link: ROUTES.SUPPLIERS,
  },
  {
    title: 'Склад',
    link: ROUTES.WAREHOUSE,
  },
  {
    title: 'Реактивы и Стандарты',
    link: ROUTES.REAGENTS_STANDARTS,
  },
  {
    title: 'Клиника и Диагностика',
    link: ROUTES.CLINIC_DIAGNISTICS,
  },
  {
    title: 'Биохимия и Биотехнологии',
    link: ROUTES.BIOCHEMISTRY_BIOTECHNOLOGY,
  },
  {
    title: 'Космецевтика',
    link: ROUTES.COSMECEUTICALS,
  },
  {
    title: 'Аналитическое оборудование',
    link: ROUTES.ANALYTICAL_EQUIPMENT,
  },
  {
    title: 'Лабораторное оборудование',
    link: ROUTES.LAB_EQUIPMENT,
  },
  {
    title: 'Оборудование Life Sciences',
    link: ROUTES.LIFE_SCIENCES_EQUIPMENT,
  },
  {
    title: 'Расходные материалы',
    link: ROUTES.CONSUMABLES,
  },
  {
    title: 'Фармацевтика',
    link: ROUTES.PHARMACEUTICALS,
  },
  {
    title: 'Ветеринария',
    link: ROUTES.VETERINARY,
  },
  {
    title: 'Микроэлектроника',
    link: ROUTES.MICROELECTRONICS,
  },
];

type CatalogPopupProps = { isHomePage?: boolean; trigger: JSX.Element };

const CatalogPopup: React.FC<CatalogPopupProps> = ({ isHomePage = false, trigger }) => {
  return (
    <Popup trigger={trigger} position="bottom left">
      <div
        className={cn(
          'bg-white border rounded-xl grid grid-flow-col grid-rows-7 grid-cols-2 gap-4 px-5 py-6',
          isHomePage ? 'border-white' : 'border-black',
        )}
      >
        {categories.map((category, index) => (
          <Link key={index} to={category.link} className="block text-xl hover:text-primary">
            {category.title}
          </Link>
        ))}
      </div>
    </Popup>
  );
};

export { CatalogPopup };
