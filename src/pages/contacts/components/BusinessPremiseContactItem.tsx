import React from 'react';

import { BusinessPremiseContact } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components';

type BusinessPremiseContactItemProps = Pick<BusinessPremiseContact, 'label' | 'image'> & {
  children: React.ReactNode;
};

const BusinessPremiseContactItem: React.FC<BusinessPremiseContactItemProps> = ({ label, image, children }) => {
  return (
    <Card className="border border-black rounded-xl flex h-full">
      <div className="flex flex-col gap-8 w-2/3 px-5 py-6">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">{label}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">{children}</CardContent>
      </div>
      <div className="w-1/3">
        <img src={image} alt={label} className="rounded-xl h-full w-full object-cover" />
      </div>
    </Card>
  );
};

export { BusinessPremiseContactItem };
