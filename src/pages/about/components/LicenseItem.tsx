import React from 'react';

import { GetLicenseDTO } from '@/api/licenses';

type LicenseItemProps = Omit<GetLicenseDTO, 'id'>;

const LicenseItem: React.FC<LicenseItemProps> = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={imgUrl} alt={title} className="object-contain w-full h-full" />
      <p className="opacity-90 text-xl text-center">{title}</p>
    </div>
  );
};

export { LicenseItem };
