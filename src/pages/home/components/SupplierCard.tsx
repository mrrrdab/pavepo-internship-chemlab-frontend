import React from 'react';

type SupplierCardProps = {
  imgSrc: string;
  title: string;
};

const SupplierCard: React.FC<SupplierCardProps> = ({ imgSrc, title }) => {
  return (
    <div className="bg-secondary rounded-xl flex justify-center items-center h-32 py-8 px-16">
      <img src={imgSrc} alt={title} className="object-contain w-full h-full" />
    </div>
  );
};

export { SupplierCard };
