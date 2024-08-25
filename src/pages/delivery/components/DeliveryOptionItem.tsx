import React from 'react';

import { Card, CardContent, CardHeader } from '@/components';

type DeliveryOptionItemProps = { price: string; description: string };

const DeliveryOptionItem: React.FC<DeliveryOptionItemProps> = ({ price, description }) => {
  return (
    <Card className="border border-black rounded flex flex-col justify-between h-full px-5 py-6">
      <CardHeader>
        <p className="text-xl">{price}</p>
      </CardHeader>
      <CardContent>
        <p className="opacity-90 text-xl">{description}</p>
      </CardContent>
    </Card>
  );
};

export { DeliveryOptionItem };
