import type { InputHTMLAttributes } from 'react';

export type CheckboxColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  color?: CheckboxColor;
  size?: CheckboxSize;
  radius?: CheckboxRadius;
  error?: boolean;
  disabled?: boolean;
}