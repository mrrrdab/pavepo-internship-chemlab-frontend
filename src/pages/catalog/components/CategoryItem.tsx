/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/utils';

type CategoryItemProps = { title: string; linkTo: string; isActive: (route: string) => boolean };

const CategoryItem: React.FC<CategoryItemProps> = ({ title, linkTo, isActive }) => {
  return (
    <Link
      to={linkTo}
      className={cn(
        'text-xl font-medium rounded-xl flex justify-center items-center hover:bg-neutral-200 hover:text-neutral-900 hover:border hover:border-black w-full h-18 px-5 py-2.5',
        isActive(linkTo) ? 'bg-primary text-white' : 'bg-white border border-black',
      )}
    >
      {title}
    </Link>
  );
};

export { CategoryItem };
