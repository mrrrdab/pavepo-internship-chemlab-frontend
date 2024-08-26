import React from 'react';

type SupplierItemProps = {
  image: string;
  title: string;
};

const SupplierItem: React.FC<SupplierItemProps> = ({ image, title }) => {
  return (
    <div className="bg-secondary rounded-xl flex justify-center items-center h-32 px-2 py-4 xs:py-8 xs:px-16">
      <img src={image} alt={title} className="object-contain w-full h-full" />
    </div>
  );
};

export { SupplierItem };
