import React from 'react';

import { Card, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@components/.';
import arrowRightBlackIcon from '@assets/icons/arrow-right-black.svg';

type CatalogCardProps = {
  imgSrc: string;
  title: string;
  description?: string;
};

const SpecialOfferCard: React.FC<CatalogCardProps> = ({ imgSrc, title, description }) => {
  return (
    <Card className="flex flex-col gap-6">
      <CardContent className="bg-secondary rounded-xl flex justify-center items-center h-100 px-8 py-12">
        <img src={imgSrc} alt={title} className="object-contain w-full h-full" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-[45%]">
          <CardTitle className="text-neutral-900 text-2xl">{title}</CardTitle>
          {description && <CardDescription className="text-neutral-900/65 text-xl">{description}</CardDescription>}
        </div>
        <Button variant="outline" borderRadius="lg" className="flex justify-between items-center w-1/2 h-16">
          <p>Подробнее</p>
          <div className="bg-white border border-black rounded-3xl p-2.5">
            <img src={arrowRightBlackIcon} alt="Arrow Right" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { SpecialOfferCard };
