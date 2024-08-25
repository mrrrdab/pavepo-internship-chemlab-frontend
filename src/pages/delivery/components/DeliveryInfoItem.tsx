import React from 'react';

import { Card, CardContent } from '@/components';

type DeliveryInfoItemProps = { description: string };

const DeliveryInfoItem: React.FC<DeliveryInfoItemProps> = ({ description }) => {
  return (
    <Card className="border border-black rounded flex flex-col justify-end h-full px-5 py-6">
      <CardContent>
        <p className="opacity-90 text-xl">{description}</p>
      </CardContent>
    </Card>
  );
};

export { DeliveryInfoItem };
