import React from 'react';

import { Card, CardHeader, CardTitle, CardFooter, Button } from '@components/.';
import arrowRightBlackIcon from '@assets/icons/arrow-right-black.svg';

type CatalogCardProps = { title: string };

const CatalogCard: React.FC<CatalogCardProps> = ({ title }) => {
  return (
    <Card className="bg-secondary rounded-xl flex flex-col h-full px-6 py-5">
      <CardHeader>
        <CardTitle className="text-neutral-900 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="mt-auto self-end">
        <Button size="sm" borderRadius="full" className="bg-secondary border border-black">
          <img src={arrowRightBlackIcon} alt="Arrow Right" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export { CatalogCard };
