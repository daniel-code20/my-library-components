import React from 'react';
import clsx from 'clsx';
import { CheckboxProps } from './Checkbox.types';
import {
  colorStyles,
  radiusStyles,
  sizeStyles,
  disabledStyles,
} from './Checkbox.styles';

const iconSizes: Record<string, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-4 h-4',
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  color = 'primary',
  size = 'md',
  radius = 'md',
  error = false,
  disabled = false,
  checked,
  onChange,
  className,
  ...props
}) => {
  const appliedColor = error ? 'error' : color;

  return (
    <label
      className={clsx(
        'inline-flex items-center cursor-pointer select-none gap-2 relative',
        disabled && 'cursor-not-allowed'
      )}
    >
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className={clsx(
          'peer absolute inset-0 w-full h-full opacity-0 m-0 cursor-pointer',
          className
        )}
        {...props}
      />

      <span
        className={clsx(
          'flex items-center justify-center border',
          sizeStyles[size],
          radiusStyles[radius],
          colorStyles[appliedColor],
          disabled && disabledStyles,
          'transition-colors duration-200'
        )}
      >
        <svg
          className={clsx(
            'transform transition-opacity transition-transform duration-200 ease-in-out',
            checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
            iconSizes[size]
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>

      {label && (
        <span
          className={clsx(
            disabled ? 'text-gray-400' : 'text-gray-900',
            'text-sm select-none'
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
