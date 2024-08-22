/* eslint-disable max-len */
import { useState, forwardRef } from 'react';

import { cn } from '@utils/cn';

// TODO: Focus
type CheckboxVariant = 'primary' | 'circle';
type CheckboxSize = 'default' | 'lg';

type CheckboxProps = {
  id?: string;
  name: string;
  checked?: boolean;
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  className?: string;
};

const containerClasses = 'relative inline-flex items-center cursor-pointer';

const checkedClasses: Record<CheckboxVariant, string> = {
  primary:
    "after:content-[url('/src/assets/icons/tick-black.svg')] after:absolute after:top-1/4 after:left-1/4 after:block after:w-1/2 after:h-1/2",
  circle:
    "after:content-[''] after:absolute after:top-1/4 after:left-1/4 after:block after:w-1/2 after:h-1/2 after:bg-black after:rounded-full",
};

const variantClasses: Record<CheckboxVariant, string> = {
  primary: 'border border-black rounded',
  circle: 'border border-black rounded-full',
};

const sizeClasses: Record<CheckboxSize, string> = {
  default: 'w-5 h-5',
  lg: 'w-11 h-11',
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant = 'primary', size = 'default', checked = false, className, ...props }, ref) => {
    const [checkedState, setCheckedState] = useState(checked);

    const variantStyles = variantClasses[variant];
    const sizeStyles = sizeClasses[size];
    const checkedStyles = checkedState ? checkedClasses[variant] : '';

    return (
      <label className={cn(containerClasses, sizeStyles)}>
        <input
          type="checkbox"
          checked={checkedState}
          className="hidden"
          onChange={() => setCheckedState(() => !checkedState)}
          ref={ref}
          {...props}
        />
        <span className={cn(variantStyles, sizeStyles, checkedStyles, className)} />
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
