import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants';

import { CategoryItem } from './CategoryItem';

const CategorySection: React.FC = () => {
  const location = useLocation();

  const isActive = (route: string) => route === location.pathname;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Акции" linkTo={ROUTES.SPECIAL_OFFERS} isActive={isActive} />
          <CategoryItem title="Поставщики" linkTo={ROUTES.SUPPLIERS} isActive={isActive} />
          <CategoryItem title="Склад" linkTo={ROUTES.WAREHOUSE} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Реактивы и Стандарты" linkTo={ROUTES.REAGENTS_STANDARTS} isActive={isActive} />
          <CategoryItem title="Клиника и Диагностика" linkTo={ROUTES.CLINIC_DIAGNISTICS} isActive={isActive} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem
            title="Биохимия и Биотехнологии"
            linkTo={ROUTES.BIOCHEMISTRY_BIOTECHNOLOGY}
            isActive={isActive}
          />
          <CategoryItem title="Аналитическое оборудование" linkTo={ROUTES.ANALYTICAL_EQUIPMENT} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Лабораторное оборудование" linkTo={ROUTES.LAB_EQUIPMENT} isActive={isActive} />
          <CategoryItem
            title="Оборудование Life Sciences"
            linkTo={ROUTES.LIFE_SCIENCES_EQUIPMENT}
            isActive={isActive}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Расходные материалы" linkTo={ROUTES.CONSUMABLES} isActive={isActive} />
          <CategoryItem title="Микроэлектроника" linkTo={ROUTES.MICROELECTRONICS} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Космецевтика" linkTo={ROUTES.COSMECEUTICALS} isActive={isActive} />
          <CategoryItem title="Ветеринария" linkTo={ROUTES.VETERINARY} isActive={isActive} />
          <CategoryItem title="Фармацевтика" linkTo={ROUTES.PHARMACEUTICALS} isActive={isActive} />
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
