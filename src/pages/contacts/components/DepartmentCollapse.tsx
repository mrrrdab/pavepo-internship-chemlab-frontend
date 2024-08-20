import React from 'react';

import { Button } from '@/components';
import addIcon from '@assets/icons/add-icon.svg';

type DepartmentButtonProps = { title: string };

const DepartmentButton: React.FC<DepartmentButtonProps> = ({ title }) => {
  return (
    <Button variant="outline" size="lg" borderRadius="lg" className="flex justify-between items-center">
      <p>{title}</p>
      <div className="bg-white border border-black rounded-3xl p-2.5">
        <img src={addIcon} alt="Add" />
      </div>
    </Button>
  );
};

export { DepartmentButton };
