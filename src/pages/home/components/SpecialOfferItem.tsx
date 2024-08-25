import React from 'react';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Card, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@/components';

type SpecialOfferProps = {
  image: string;
  title: string;
  description?: string;
};

const SpecialOfferItem: React.FC<SpecialOfferProps> = ({ image, title, description }) => {
  return (
    <Card className="flex flex-col gap-6">
      <CardContent className="bg-secondary rounded-xl flex justify-center items-center h-104 px-8 py-12">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {/* TODO-L: Width */}
        <div className="flex flex-col gap-2 w-[45%]">
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && <CardDescription className="opacity-65 text-xl">{description}</CardDescription>}
        </div>
        <Button variant="outline" borderRadius="lg" className="group flex justify-between items-center w-1/2 h-16">
          <p>Подробнее</p>
          <div className="bg-white border border-black rounded-3xl group-hover:bg-neutral-300 p-2.5">
            <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { SpecialOfferItem };
