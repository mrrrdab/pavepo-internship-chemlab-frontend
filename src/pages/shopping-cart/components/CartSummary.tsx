/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardFooter } from '@/components';
import { DeliveryOption } from '@/types';

type CartSummaryProps = {
  productsCount: number;
  netTotalPrice: number;
  discount: number;
  deliveryOptions?: DeliveryOption[];
};

const CartSummary: React.FC<CartSummaryProps> = ({ productsCount, netTotalPrice, discount, deliveryOptions }) => {
  let totalPrice;
  if (deliveryOptions) {
    totalPrice = netTotalPrice - discount + deliveryOptions.find(option => option.type === 'pickup')!.price;
  }

  return (
    <Card>
      <CardContent className="grow bg-primary rounded text-white text-xl flex flex-col gap-6 p-8">
        {!deliveryOptions ? (
          <div className="bg-error w-full">
            <p className="text-white text-2xl text-center px-4 py-2.5">Ошибка сервера. Вернитесь позже</p>
          </div>
        ) : (
          <React.Fragment>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p>Количество товаров:</p>
                <p>{productsCount}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Стоимость:</p>
                <p>{netTotalPrice} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Скидка:</p>
                <p>{discount} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Доставка:</p>
                <p>{deliveryOptions.find(option => option.type === 'pickup')!.price} ₽</p>
              </div>
            </div>
            <div className="text-2xl flex justify-between items-center">
              <p>Итого:</p>
              <h4>{totalPrice!.toFixed(2)} ₽</h4>
            </div>
          </React.Fragment>
        )}
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

export { CartSummary };
