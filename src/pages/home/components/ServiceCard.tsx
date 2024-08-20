import React from 'react';

import { Card, CardHeader, CardTitle, CardContent, Button } from '@components/.';
import arrowRightBlackIcon from '@assets/icons/arrow-right-black.svg';

type ServiceCardProps = { title: string; description: string };

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card className="bg-primary rounded-xl flex flex-col gap-6 px-5 py-6">
      <CardHeader>
        <CardTitle className="text-white text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="flex-1">
          <p className="text-white/90 text-xl">{description}</p>
        </div>
        <div className="flex-1">
          <Button variant="outline" borderRadius="lg" className="flex justify-between items-center w-1/3 h-15 ml-auto">
            <p>Подробнее</p>
            <div className="bg-white border border-black rounded-3xl p-2.5">
              <img src={arrowRightBlackIcon} alt="Arrow Right" />
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { ServiceCard };
