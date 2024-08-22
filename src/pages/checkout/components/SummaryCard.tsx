import React from 'react';

import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components';

// TODO
type SummaryCardProps = { price: number; vat: number; delivery: number; total: number };

const SummaryCard: React.FC<SummaryCardProps> = ({ price, vat, delivery, total }) => {
  return (
    <Card>
      <div className="grow bg-primary rounded text-white text-xl p-8 flex flex-col gap-5">
        <CardHeader className="text-white text-2xl">
          <CardTitle>Ваш заказ</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <p>Товаров на:</p>
              <p>{price} ₽</p>
            </div>
            <div className="flex justify-between items-center">
              <p>НДС:</p>
              <p>{vat} ₽</p>
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
      </div>

      <CardFooter>
        <Button type="submit" variant="outline" className="font-medium rounded w-full h-12">
          Оформить заказ
        </Button>
      </CardFooter>
    </Card>
  );
};

export { SummaryCard };
