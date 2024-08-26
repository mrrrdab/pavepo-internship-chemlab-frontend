import React from 'react';

import arrowRightDarkSmallIcon from '@/assets/icons/arrow-right-dark-sm.svg';
import { Card, CardHeader, CardTitle, CardFooter, Button } from '@/components';

type CatalogItemProps = { title: string };

const CatalogItem: React.FC<CatalogItemProps> = ({ title }) => {
  return (
    <Card className="group bg-secondary rounded-xl flex flex-col h-full hover:bg-neutral-200 px-6 py-5">
      <CardHeader>
        <CardTitle className="text-xl 2xl:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="mt-auto self-end">
        <Button
          variant="text"
          size="sm"
          borderRadius="full"
          className="bg-secondary border border-black group-hover:bg-neutral-300"
        >
          <img src={arrowRightDarkSmallIcon} alt="Arrow Right" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export { CatalogItem };
