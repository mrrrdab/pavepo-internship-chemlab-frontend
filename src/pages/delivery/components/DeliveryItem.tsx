import React from 'react';

import { Card, CardContent, CardHeader } from '@/components';

type DeliveryItem = { price?: string; description: string };

const DeliveryItem: React.FC<DeliveryItem> = ({ price, description }) => {
  return (
    <Card className="border border-black rounded flex flex-col justify-between h-full px-5 py-6">
      <CardHeader>{price && <p className="text-xl">{price}</p>}</CardHeader>
      <CardContent>
        <p className="opacity-90 text-xl">{description}</p>
      </CardContent>
    </Card>
  );
};

export { DeliveryItem };
