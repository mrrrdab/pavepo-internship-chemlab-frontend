import React from 'react';

import { cn } from '@utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'default' | 'sm' | 'lg';
type ButtonBorderRadius = 'default' | 'lg' | 'full';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  borderRadius?: ButtonBorderRadius;
};

const baseClasses = 'text-xl';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-neutral-900',
  outline: 'bg-white border border-black text-neutral-900',
  ghost: 'bg-transparent text-black',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-5 py-2.5',
  sm: 'p-2.5',
  lg: 'px-5 py-6',
};

const borderRadiusClasses: Record<ButtonBorderRadius, string> = {
  default: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-3xl',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  borderRadius = 'default',
  className,
  children,
  ...props
}) => {
  const variantStyles = variantClasses[variant];
  const sizeStyles = sizeClasses[size];
  const borderRadiusStyles = borderRadiusClasses[borderRadius];

  return (
    <button className={cn(baseClasses, variantStyles, sizeStyles, borderRadiusStyles, className)} {...props}>
      {children}
    </button>
  );
};

export { Button };
