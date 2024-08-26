import React, { forwardRef } from 'react';

import { cn } from '@/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'default' | 'sm' | 'lg' | 'xl';
type ButtonBorderRadius = 'default' | 'lg' | 'full' | 'none';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  borderRadius?: ButtonBorderRadius;
};

const baseClasses = 'text-base 2xl:text-xl';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-neutral-900',
  outline: 'bg-white border border-black text-neutral-900',
  text: 'bg-transparent text-black',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-5 py-2.5',
  sm: 'p-2.5',
  lg: 'px-5 py-6',
  xl: 'px-16 py-6',
};

const borderRadiusClasses: Record<ButtonBorderRadius, string> = {
  default: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
  none: 'rounded-none',
};

const hoverClasses: Record<ButtonVariant, string> = {
  primary: 'hover:bg-primary-dark',
  secondary: 'hover:bg-neutral-200 hover:opacity-100',
  outline: 'hover:bg-neutral-200 hover:opacity-100',
  text: 'hover:bg-neutral-200 hover:opacity-100',
};

const disabledClasses: Record<ButtonVariant, string> = {
  primary: 'disabled:bg-neutral-300 disabled:text-neutral-900/60 disabled:cursor-initial',
  secondary: 'disabled:bg-neutral-300 disabled:text-neutral-900/60 disabled:cursor-initial',
  outline: 'disabled:bg-neutral-300 disabled:text-neutral-900/60 disabled:cursor-initial',
  text: 'disabled:text-neutral-900/60 disabled:cursor-initial',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', borderRadius = 'default', className, children, ...props }, ref) => {
    const variantStyles = variantClasses[variant];
    const sizeStyles = sizeClasses[size];
    const borderRadiusStyles = borderRadiusClasses[borderRadius];
    const hoverStyles = hoverClasses[variant];
    const disabledStyles = disabledClasses[variant];

    return (
      <button
        className={cn(
          baseClasses,
          variantStyles,
          sizeStyles,
          borderRadiusStyles,
          hoverStyles,
          disabledStyles,
          className,
        )}
        type="button"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
