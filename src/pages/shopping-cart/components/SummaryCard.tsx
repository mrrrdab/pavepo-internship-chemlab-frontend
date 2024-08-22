/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardFooter } from '@/components';

type SummaryCardProps = { productsCount: number; price: number; discount: number; delivery: number; total: number };

const SummaryCard: React.FC<SummaryCardProps> = ({ productsCount, price, discount, delivery, total }) => {
  return (
    <Card>
      <CardContent className="grow bg-primary rounded text-white text-xl flex flex-col gap-6 p-8">
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <p>Количество товара:</p>
            <p>{productsCount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Стоимость:</p>
            <p>{price} ₽</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Скидка:</p>
            <p>{discount} ₽</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Доставка:</p>
            <p>{delivery} ₽</p>
          </div>
        </div>
        <div className="text-2xl flex justify-between items-center">
          <p>Итого:</p>
          <h4>{total} ₽</h4>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          to="/checkout"
          className="bg-white text-xl font-medium border border-black rounded flex justify-center items-center w-full h-12 p-2.5"
        >
          Перейти к оформлению
        </Link>
      </CardFooter>
    </Card>
  );
};

export { SummaryCard };
