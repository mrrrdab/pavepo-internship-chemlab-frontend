/* eslint-disable max-len */
import React from 'react';

import { GetDeliveryPageDTO } from '@/api';

import { DeliveryOption } from './DeliveryOption';
import { DeliveryDetail } from './DeliveryDetail';

type DeliveryInfoSectionProps = Pick<
  GetDeliveryPageDTO,
  'deliverySectionTitle' | 'deliveryOptions' | 'deliveryDetails'
>;

const DeliveryInfoSection: React.FC<DeliveryInfoSectionProps> = ({
  deliverySectionTitle,
  deliveryOptions,
  deliveryDetails,
}) => {
  return (
    <section>
      <h2 className="text-base 2xl:text-xl mb-6 2xl:mb-8">{deliverySectionTitle}</h2>
      <div className="grid auto-rows-[10rem] lg:auto-rows-[17.5rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {deliveryOptions.map(option => (
          <div key={option.id}>
            <DeliveryOption price={option.price} description={option.description} />
          </div>
        ))}
      </div>
      <div className="grid auto-rows-[10rem] lg:auto-rows-[17.5rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {deliveryDetails.map(info => (
          <DeliveryDetail key={info.id} description={info.info} />
        ))}
      </div>
    </section>
  );
};

export { DeliveryInfoSection };
