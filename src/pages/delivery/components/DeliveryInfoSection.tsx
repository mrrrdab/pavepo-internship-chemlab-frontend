/* eslint-disable max-len */
import React from 'react';
import { useQuery } from 'react-query';

import { getAllDeliveryOptions } from '@/api';
import { Loader } from '@/components';

import { DeliveryOptionItem } from './DeliveryOptionItem';
import { DeliveryInfoItem } from './DeliveryInfoItem';

const DeliveryInfoSection: React.FC = () => {
  const { isLoading, isError, data } = useQuery(['delivery-options'], () => getAllDeliveryOptions(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="w-fit mx-auto">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-fit mx-auto">
        <p className="text-error text-xl 2xl:text-2xl">Ошибка загрузки информации о доставке</p>
      </div>
    );
  }

  return (
    <section>
      {data && (
        <React.Fragment>
          <h2 className="text-base 2xl:text-xl mb-6 2xl:mb-8">Стоимость доставки:</h2>
          <div className="grid auto-rows-[10rem] lg:auto-rows-[17.5rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {data.data.map(option => (
              <div key={option.id}>
                <DeliveryOptionItem
                  price={option.price === 0 ? 'Бесплатно' : `${option.price} руб`}
                  description={option.description}
                />
              </div>
            ))}
          </div>
          <div className="grid auto-rows-[10rem] lg:auto-rows-[17.5rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            <DeliveryInfoItem description="В стоимость доставки входят услуги склада по сборке вашего заказа и упаковке для отправки. Мы заботимся о том, чтобы опасные грузы были доставлены без повреждений." />
            <DeliveryInfoItem description="Стоимость доставки грузов весом свыше 50 кг и объемом свыше 0.5 куб. м по России рассчитывается индивидуально. Вам будет выставлен корректирующий счет за доставку после проверки заказа" />
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export { DeliveryInfoSection };
