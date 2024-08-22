import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';
import arrowRightWhiteIcon from '@assets/icons/arrow-right-white.svg';
import catalogImageFirst from '@assets/images/catalog-1.png';
import catalogImageSecond from '@assets/images/catalog-2.png';

import { CatalogCard } from './CatalogCard';

const CatalogSection = () => {
  return (
    <section className="px-26">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl">Каталог</h2>
        <Link
          to={ROUTES.HOME}
          className="bg-primary text-white text-xl rounded-lg flex justify-center items-center gap-4 w-1/6 h-15"
        >
          <p className="font-medium">Смотреть еще</p>
          <img src={arrowRightWhiteIcon} alt="Arrow Right" />
        </Link>
      </div>
      <div className="grid auto-rows-[17.5rem] grid-cols-4 gap-x-5 gap-y-6">
        <div className="col-span-1">
          <CatalogCard title="Оборудование и Приборы" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Реактивы и Стандарты" />
        </div>
        <div className="col-span-2">
          <img src={catalogImageFirst} alt="Catalog Image" className="col-span-2 object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Клиника и Диагностика" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Биохимия и Биотехнологии" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Фармацевтика" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Ветеринария" />
        </div>
        <div className="col-span-2">
          <img src={catalogImageSecond} alt="Catalog Image" className="col-span-2 object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Космецевтика" />
        </div>
        <div className="col-span-1">
          <CatalogCard title="Микроэлектроника" />
        </div>
      </div>
    </section>
  );
};

export { CatalogSection };
