/* eslint-disable max-len */
import React, { forwardRef } from 'react';

import { cn } from '@/utils';

type RadioVariant = 'primary' | 'checkbox';
type RadioSize = 'default';

type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  variant?: RadioVariant;
  size?: RadioSize;
};

const containerClasses = 'relative inline-flex items-center cursor-pointer';
const baseClasses = 'border border-black rounded-full';

const variantClasses: Record<RadioVariant, string> = {
  primary: 'rounded-full',
  checkbox: 'rounded',
};

const checkedClasses: Record<RadioVariant, string> = {
  primary:
    "after:content-[''] after:absolute after:top-1/4 after:left-1/4 after:block after:w-1/2 after:h-1/2 after:bg-black after:rounded-full",
  checkbox:
    "after:content-[url('/src/assets/icons/tick-black.svg')] after:absolute after:top-0 after:left-0 after:block",
};

const sizeClasses: Record<RadioVariant, Record<RadioSize, string>> = {
  primary: { default: 'w-[20px] h-[20px]' },
  checkbox: { default: 'w-[24px] h-[24px]' },
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ variant = 'primary', size = 'default', checked = false, value, onChange, ...props }, ref) => {
    const variantStyles = variantClasses[variant];
    const sizeStyles = sizeClasses[variant][size];
    const checkedStyles = checked ? checkedClasses[variant] : '';

    return (
      <label className={cn(containerClasses, sizeStyles)}>
        <input
          type="radio"
          checked={checked}
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
          className="hidden"
        />
        <span className={cn(baseClasses, variantStyles, sizeStyles, checkedStyles)} />
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export { Radio };
