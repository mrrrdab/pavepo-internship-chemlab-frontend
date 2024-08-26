/* eslint-disable max-len */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants';

import { CategoryItem } from './CategoryItem';

const CategorySection: React.FC = () => {
  const location = useLocation();

  const isActive = (route: string) => route === location.pathname;

  return (
    <section>
      <div className="grid gap-5 auto-rows-auto grid-flow-col xl:grid-flow-row xl:grid-rows-3 xl:grid-cols-12 overflow-auto">
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Акции" linkTo={ROUTES.SPECIAL_OFFERS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Поставщики" linkTo={ROUTES.SUPPLIERS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Склад" linkTo={ROUTES.WAREHOUSE} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3">
          <CategoryItem title="Реактивы и Стандарты" linkTo={ROUTES.REAGENTS_STANDARTS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem title="Клиника и Диагностика" linkTo={ROUTES.CLINIC_DIAGNISTICS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem
            title="Биохимия и Биотехнологии"
            linkTo={ROUTES.BIOCHEMISTRY_BIOTECHNOLOGY}
            isActive={isActive}
          />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem title="Аналитическое оборудование" linkTo={ROUTES.ANALYTICAL_EQUIPMENT} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3xl:col-span-3">
          <CategoryItem title="Лабораторное оборудование" linkTo={ROUTES.LAB_EQUIPMENT} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem
            title="Оборудование Life Sciences"
            linkTo={ROUTES.LIFE_SCIENCES_EQUIPMENT}
            isActive={isActive}
          />
        </div>
        <div className="min-w-60 xl:col-span-4 3 3xl:col-span-3">
          <CategoryItem title="Расходные материалы" linkTo={ROUTES.CONSUMABLES} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-3">
          <CategoryItem title="Микроэлектроника" linkTo={ROUTES.MICROELECTRONICS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Космецевтика" linkTo={ROUTES.COSMECEUTICALS} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Ветеринария" linkTo={ROUTES.VETERINARY} isActive={isActive} />
        </div>
        <div className="min-w-60 xl:col-span-3 3xl:col-span-2">
          <CategoryItem title="Фармацевтика" linkTo={ROUTES.PHARMACEUTICALS} isActive={isActive} />
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
