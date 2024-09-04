import React from 'react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components';

type ServiceItemProps = { title: string; description: string };

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <Card className="bg-primary rounded-xl flex flex-col gap-6 px-5 py-6 w-full">
      <CardHeader>
        <CardTitle className="text-white text-xl 2xl:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center mt-auto">
        <div className="flex-1">
          <p className="text-white/90 text-base 2xl:text-xl">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export { ServiceItem };
