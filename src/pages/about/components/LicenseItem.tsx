import React from 'react';

import { License } from '@/types';

type LicenseItemProps = Pick<License, 'title' | 'image'>;

const LicenseItem: React.FC<LicenseItemProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col gap-2 h-full p-4">
      <img src={image.url} alt={title} className="w-full h-3/4 object-contain" />
      <p className="opacity-90 text-base 2xl:text-xl text-center h-1/4">{title}</p>
    </div>
  );
};

export { LicenseItem };
