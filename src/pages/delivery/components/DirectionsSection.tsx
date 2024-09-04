import React from 'react';

import arrowDownDarkSmallIcon from '@/assets/icons/arrow-down-dark-sm.svg';
import { GetDeliveryPageDTO } from '@/api';

type DirectionsSectionProps = Pick<GetDeliveryPageDTO, 'directionsTitle' | 'directions'>;

const DirectionsSection: React.FC<DirectionsSectionProps> = ({ directionsTitle, directions }) => {
  return (
    <section>
      <h2 className="text-xl 2xl:text-2xl mb-8">{directionsTitle}</h2>
      <div className="flex gap-9">
        <img src={directions.preview} alt={directions.previewAlt} className="hidden xs:block" />
        <div className="flex flex-col gap-5 xs:justify-between">
          <p className="opacity-90 text-base 2xl:text-xl">{directions.title}</p>
          <a href="" className="border-b border-b-black flex items-center gap-2">
            <p className="opacity-90 text-base 2xl:text-xl hover:text-primary">{directions.linkLabel}</p>
            <img src={arrowDownDarkSmallIcon} alt="Arrow Down" className="hidden 2xl:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { DirectionsSection };
