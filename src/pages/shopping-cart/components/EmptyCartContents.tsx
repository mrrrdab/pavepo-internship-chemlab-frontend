import React from 'react';
import { Link } from 'react-router-dom';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { ROUTES } from '@/constants';
import { Button } from '@/components';

const EmptyCartContents: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-1/3 mx-auto">
      <div className="flex flex-col text-center gap-6">
        <h2 className="text-2xl">Ваша корзина пуста!</h2>
        <p className="opacity-65 text-xl">
          Но это легко исправить! Отправляйтесь за покупками или авторизуйтесь, чтобы увидеть уже добавленные товары
        </p>
      </div>
      <Link to={ROUTES.LAB_EQUIPMENT} className="w-full">
        <Button
          variant="outline"
          borderRadius="lg"
          className="group flex justify-between items-center w-3/4 h-16 mx-auto"
        >
          <p>В каталог</p>
          <div className="bg-white border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
            <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export { EmptyCartContents };
