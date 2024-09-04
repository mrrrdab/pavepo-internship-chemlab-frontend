import React from 'react';

type SupplierItemProps = {
  image: string;
  alt: string;
};

const SupplierItem: React.FC<SupplierItemProps> = ({ image, alt }) => {
  return (
    <div className="bg-secondary rounded-xl flex justify-center items-center h-32 p-4">
      <img src={image} alt={alt} className="object-contain w-full h-full" />
    </div>
  );
};

export { SupplierItem };
