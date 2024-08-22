import React, { useState } from 'react';

import { cn } from '@utils/cn';

// TODO: Focus
type ColorCheckboxVariant = 'primary';
type ColorCheckboxSize = 'default' | 'lg';

type ColorCheckboxProps = {
  id?: string;
  name: string;
  color: string;
  checked?: boolean;
  variant?: ColorCheckboxVariant;
  size?: ColorCheckboxSize;
  className?: string;
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
  const [checkedState, setCheckedState] = useState(checked);

  const variantStyles = variantClasses[variant];
  const sizeStyles = sizeClasses[size];
  const checkedStyles = checkedState ? checkedClasses : '';

  return (
    <label className={cn(containerClasses, sizeStyles)}>
      <input
        type="checkbox"
        checked={checkedState}
        className="hidden"
        onChange={() => setCheckedState(() => !checkedState)}
        {...props}
      />
      <span style={{ backgroundColor: color }} className={cn(variantStyles, sizeStyles, checkedStyles)} />
    </label>
  );
};

export { ColorCheckbox };
