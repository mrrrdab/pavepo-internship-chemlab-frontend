/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';

import { getDeliveryOptions } from '@/api';

import { DeliveryOptionItem } from './DeliveryOptionItem';
import { DeliveryInfoItem } from './DeliveryInfoItem';

const DeliveryInfoSection: React.FC = () => {
  const {
    isLoading,
    isError,
    data: deliveryOptions,
  } = useQuery(['delivery-options'], () => getDeliveryOptions(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Oval height="40" width="40" color="#2196F3" secondaryColor="#F1F1F1" strokeWidth={4} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-2xl">Ошибка загрузки информации о доставке</p>
      </div>
    );
  }

  return (
    <section>
      {deliveryOptions && (
        <React.Fragment>
          <h2 className="text-xl mb-8">Стоимость доставки:</h2>
          <div className="grid auto-rows-[17.5rem] grid-cols-3 gap-5">
            {deliveryOptions.map(option => (
              <DeliveryOptionItem
                key={option.id}
                price={option.price === 0 ? 'Бесплатно' : `${option.price} руб`}
                description={option.description}
              />
            ))}
          </div>
          <div className="grid auto-rows-[17.5rem] grid-cols-3 gap-5 mt-5">
            <DeliveryInfoItem description="В стоимость доставки входят услуги склада по сборке вашего заказа и упаковке для отправки. Мы заботимся о том, чтобы опасные грузы были доставлены без повреждений." />
            <DeliveryInfoItem description="Стоимость доставки грузов весом свыше 50 кг и объемом свыше 0.5 куб. м по России рассчитывается индивидуально. Вам будет выставлен корректирующий счет за доставку после проверки заказа" />
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export { DeliveryInfoSection };
