import React from 'react';

import { cn } from '@/utils';

type ColorCheckboxVariant = 'primary';
type ColorCheckboxSize = 'default' | 'lg';

type ColorCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  variant?: ColorCheckboxVariant;
  size?: ColorCheckboxSize;
};

const containerClasses = 'relative inline-flex items-center cursor-pointer';
const checkedClasses = 'outline outline-primary outline-offset-2';

const variantClasses: Record<ColorCheckboxVariant, string> = {
  primary: 'border border-black rounded',
};

const sizeClasses: Record<ColorCheckboxSize, string> = {
  default: 'w-5 h-5',
  lg: 'w-8 h-8',
};

const ColorCheckbox: React.FC<ColorCheckboxProps> = ({
  variant = 'primary',
  size = 'default',
  checked = false,
  color,
  ...props
}) => {
  const variantStyles = variantClasses[variant];
  const sizeStyles = sizeClasses[size];
  const checkedStyles = checked ? checkedClasses : '';

  return (
    <label className={cn(containerClasses, sizeStyles)}>
      <input type="checkbox" checked={checked} className="hidden" {...props} />
      <span style={{ backgroundColor: color }} className={cn(variantStyles, sizeStyles, checkedStyles)} />
    </label>
  );
};

export { ColorCheckbox };
