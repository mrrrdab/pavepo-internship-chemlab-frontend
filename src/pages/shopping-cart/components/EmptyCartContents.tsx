import { Link } from 'react-router-dom';

import arrowRightIcon from '@assets/icons/arrow-right-black-sm.svg';
import { Button } from '@/components';

const EmptyCartContents = () => {
  return (
    <div className="flex flex-col gap-8 w-1/3 mx-auto">
      <div className="flex flex-col text-center gap-6">
        <h2 className="text-2xl">Ваша корзина пуста!</h2>
        <p className="opacity-65 text-xl">
          Но это легко исправить! Отправляйтесь за покупками или авторизуйтесь, чтобы увидеть уже добавленные товары
        </p>
      </div>
      <Link to="/catalog/lab-equipment" className="w-full">
        <Button variant="outline" borderRadius="lg" className="flex justify-between items-center w-3/4 h-16 mx-auto">
          <p>В каталог</p>
          <div className="bg-white border border-black rounded-3xl p-2.5">
            <img src={arrowRightIcon} alt="Arrow Right" />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export { EmptyCartContents };
