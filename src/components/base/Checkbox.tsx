/* eslint-disable max-len */
import React, { forwardRef } from 'react';

import { cn } from '@/utils';

type CheckboxSize = 'default' | 'lg';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: CheckboxSize;
};

const containerClasses = 'relative inline-flex items-center cursor-pointer';

const baseClasses = 'border border-black rounded';

const sizeClasses: Record<CheckboxSize, string> = {
  default: 'w-[24px] h-[24px]',
  lg: 'w-[44px] h-[44px]',
};

const checkedClasses: Record<CheckboxSize, string> = {
  default:
    "after:content-[url('/src/assets/icons/tick-black.svg')] after:absolute after:top-0 after:left-0 after:block",
  lg: "after:content-[url('/src/assets/icons/tick-black.svg')] after:absolute after:top-1/4 after:left-1/4 after:block",
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'default', checked = false, onChange, ...props }, ref) => {
    const sizeStyles = sizeClasses[size];
    const checkedStyles = checked ? checkedClasses[size] : '';

    return (
      <label className={cn(containerClasses, sizeStyles)}>
        <input type="checkbox" checked={checked} onChange={onChange} ref={ref} {...props} className="hidden" />
        <span className={cn(baseClasses, sizeStyles, checkedStyles)} />
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
