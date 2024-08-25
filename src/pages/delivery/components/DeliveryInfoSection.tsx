/* eslint-disable max-len */
import React from 'react';

import { DeliveryItem } from './DeliveryItem';

const DeliveryInfoSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl mb-8">Стоимость доставки:</h2>
      <div className="grid auto-rows-[17.5rem] grid-cols-3 gap-5">
        <div>
          <DeliveryItem
            price="Бесплатно"
            description="Самовывоз со склада  расположенного в г. Подольск Московской областию. Адрес склада: 142103, г. Подольск Московской области, ул. Бронницкая, дом 5."
          />
        </div>
        <div>
          <DeliveryItem price="3000 руб" description="Доставка по Москве и Московской области." />
        </div>
        <div>
          <DeliveryItem price="5000 руб" description="Доставка в другие регионы России." />
        </div>
        <div>
          <DeliveryItem description="В стоимость доставки входят услуги склада по сборке вашего заказа и упаковке для отправки. Мы заботимся о том, чтобы опасные грузы были доставлены без повреждений." />
        </div>
        <div>
          <DeliveryItem description="Стоимость доставки грузов весом свыше 50 кг и объемом свыше 0.5 куб. м по России рассчитывается индивидуально. Вам будет выставлен корректирующий счет за доставку после проверки заказа" />
        </div>
      </div>
    </section>
  );
};

export { DeliveryInfoSection };
