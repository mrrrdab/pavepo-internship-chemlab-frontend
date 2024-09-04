/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardFooter } from '@/components';
import { GetDeliveryOptionDTO } from '@/api';

type CartSummaryProps = {
  productsCount: number;
  netTotalPrice: number;
  discount: number;
  deliveryOptions?: GetDeliveryOptionDTO[];
};

const CartSummary: React.FC<CartSummaryProps> = ({ productsCount, netTotalPrice, discount, deliveryOptions }) => {
  const { t } = useTranslation();

  let totalPrice;
  if (deliveryOptions) {
    totalPrice = netTotalPrice - discount + deliveryOptions.find(option => option.type === 'pickup')!.price;
  }

  return (
    <Card>
      <CardContent className="grow bg-primary rounded text-white text-base 2xl:text-xl flex flex-col gap-6 p-8">
        {!deliveryOptions ? (
          <div className="bg-error w-full">
            <p className="text-white text-xl 2xl:text-2xl text-center px-4 py-2.5">
              {t('common_messages.server_error')}
            </p>
          </div>
        ) : (
          <React.Fragment>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p>{t('shopping_cart_page.order_summary.products_count')}:</p>
                <p>{productsCount}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('shopping_cart_page.order_summary.net_price')}:</p>
                <p>{netTotalPrice} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('shopping_cart_page.order_summary.discount')}:</p>
                <p>{discount} ₽</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{t('shopping_cart_page.order_summary.delivery')}:</p>
                <p>{deliveryOptions.find(option => option.type === 'pickup')!.price} ₽</p>
              </div>
            </div>
            <div className="text-xl 2xl:text-2xl flex justify-between items-center">
              <p>{t('shopping_cart_page.order_summary.total')}:</p>
              <h4>{totalPrice!.toFixed(2)} ₽</h4>
            </div>
          </React.Fragment>
        )}
      </CardContent>
      <CardFooter>
        <Link
          to="/checkout"
          className="bg-white text-base 2xl:text-xl font-medium border border-black rounded flex justify-center items-center w-full h-12 p-2.5"
        >
          {t('shopping_cart_page.checkout_button')}
        </Link>
      </CardFooter>
    </Card>
  );
};

export { CartSummary };
