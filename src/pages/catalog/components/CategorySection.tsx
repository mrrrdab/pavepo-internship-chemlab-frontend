import { useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants';

import { CategoryItem } from './CategoryItem';

// TODO
const CategorySection = () => {
  const location = useLocation();

  const isActive = (route: string) => route === location.pathname;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Акции" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Поставщики" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Склад" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Реактивы и Стандарты" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Клиника и Диагностика" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Биохимия и Биотехнологии" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Аналитическое оборудование" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Лабораторное оборудование" isActive={isActive} linkTo={ROUTES.LAB_EQUIPMENT} />
          <CategoryItem title="Оборудование Life Sciences" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Расходные материалы" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Микроэлектроника" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
        <div className="flex-1 flex gap-5">
          <CategoryItem title="Космецевтика" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Ветеринария" linkTo={ROUTES.HOME} isActive={isActive} />
          <CategoryItem title="Фармацевтика" linkTo={ROUTES.HOME} isActive={isActive} />
        </div>
      </div>
    </section>
  );
};

export { CategorySection };
