import React from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import { useCart } from '@/hooks';
import { getTaxes } from '@/api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components';

type OrderSummaryProps = {
  selectedDeliveryMethod: string;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ selectedDeliveryMethod }) => {
  const { netPrice, discount, deliveryOptions } = useCart();

  const {
    isLoading,
    isError,
    data: taxes,
  } = useQuery(['taxes'], () => getTaxes(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  let selectedDeliveryOption;
  let vatTax;
  let totalPrice;
  let vat;

  if (deliveryOptions && taxes) {
    selectedDeliveryOption = deliveryOptions.find(option => option.type === selectedDeliveryMethod);

    vatTax = taxes.find(tax => tax.type === 'vat');
    totalPrice = netPrice - discount + selectedDeliveryOption!.price + vatTax!.value;
    vat = vatTax!.value * totalPrice;
  }

  return (
    <Card>
      <div className="grow bg-primary rounded text-white text-xl flex flex-col gap-5 p-8">
        <CardHeader className="text-white text-2xl">
          <CardTitle>Ваш заказ</CardTitle>
        </CardHeader>
        {isLoading ? (
          <div className="w-fit mx-auto">
            <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
          </div>
        ) : isError || !deliveryOptions ? (
          <div className="bg-error w-full">
            <p className="text-white text-2xl text-center px-4 py-2.5">Ошибка сервера. Вернитесь позже</p>
          </div>
        ) : (
          taxes && (
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <p>Товаров на:</p>
                  <p>{netPrice} ₽</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>НДС:</p>
                  <p>{vat!.toFixed(2)} ₽</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Доставка:</p>
                  <p>{selectedDeliveryOption!.price} ₽</p>
                </div>
              </div>
              <div className="text-2xl flex justify-between items-center">
                <p>Итого:</p>
                <h4>{totalPrice!.toFixed(2)} ₽</h4>
              </div>
            </CardContent>
          )
        )}
      </div>
    </Card>
  );
};

export { OrderSummary };
