/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/utils';

type CategoryItemProps = { title: string; linkTo: string; isActive: any };

const CategoryItem: React.FC<CategoryItemProps> = ({ title, linkTo, isActive }) => {
  return (
    <Link
      to={linkTo}
      className={cn(
        isActive(linkTo) ? 'bg-primary text-white' : 'bg-white border border-black',
        'text-xl font-medium rounded-xl flex justify-center items-center w-full h-18 px-5 py-2.5',
      )}
    >
      {title}
    </Link>
  );
};

export { CategoryItem };
