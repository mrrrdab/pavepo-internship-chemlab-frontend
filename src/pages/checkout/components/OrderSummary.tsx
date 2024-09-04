import React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { useCart } from '@/hooks';
import { GetDeliveryOptionDTO, GetTaxDTO, getTaxes } from '@/api';
import { Card, CardHeader, CardTitle, CardContent, Loader } from '@/components';

type OrderSummaryProps = {
  selectedDeliveryMethod: string;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ selectedDeliveryMethod }) => {
  const { netPrice, discount, deliveryOptions } = useCart();
  const { t } = useTranslation();

  const {
    data: taxes,
    isLoading,
    isError,
  } = useQuery(['taxes'], () => getTaxes(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  let selectedDeliveryOption: GetDeliveryOptionDTO | undefined;
  let vatTax: GetTaxDTO['data'] | undefined;
  let totalPrice: number | undefined;
  let vat: number | undefined;

  if (deliveryOptions && taxes) {
    selectedDeliveryOption = deliveryOptions.find(option => option.type === selectedDeliveryMethod);

    vatTax = taxes.data.find(tax => tax.type === 'vat');
    vat = vatTax!.value * netPrice;
    totalPrice = netPrice - discount + selectedDeliveryOption!.price + vat;
  }

  return (
    <Card>
      <div className="grow bg-primary rounded text-white text-base 2xl:text-xl flex flex-col gap-5 p-8">
        <CardHeader className="text-white text-xl 2xl:text-2xl">
          <CardTitle>{t('checkout_page.order_summary.title')}</CardTitle>
        </CardHeader>
        {isLoading ? (
          <div className="w-fit mx-auto">
            <Loader />
          </div>
        ) : isError || !deliveryOptions || !taxes ? (
          <div className="bg-error w-full">
            <p className="text-white text-xl 2xl:text-2xl text-center px-4 py-2.5">
              {t('common_messages.server_error')}
            </p>
          </div>
        ) : (
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p>{t('checkout_page.order_summary.net_price')}:</p>
                <p>{netPrice} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('checkout_page.order_summary.discount')}:</p>
                <p>{discount} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('checkout_page.order_summary.vat')}:</p>
                <p>{vat!.toFixed(2)} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('checkout_page.order_summary.delivery')}:</p>
                <p>{selectedDeliveryOption!.price} ₽</p>
              </div>
            </div>
            <div className="text-xl 2xl:text-2xl flex justify-between items-center">
              <p>{t('checkout_page.order_summary.total')}:</p>
              <h4>{totalPrice!.toFixed(2)} ₽</h4>
            </div>
          </CardContent>
        )}
      </div>
    </Card>
  );
};

export { OrderSummary };
