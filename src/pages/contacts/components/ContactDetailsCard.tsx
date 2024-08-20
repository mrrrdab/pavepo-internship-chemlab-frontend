import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components';

type ContactDetailsCardProps = {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
};

const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({ imgSrc, title, children }) => {
  return (
    <Card className="border border-black rounded-xl flex h-full">
      <div className="flex flex-col gap-8 w-2/3 px-5 py-6">
        <CardHeader>
          <CardTitle className="text-neutral-900 text-2xl font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">{children}</CardContent>
      </div>
      <div className="w-1/3">
        <img src={imgSrc} alt={title} className="rounded-xl h-full w-full object-cover" />
      </div>
    </Card>
  );
};

export { ContactDetailsCard };
