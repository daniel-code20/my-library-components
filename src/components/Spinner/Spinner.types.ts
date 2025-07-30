export type SpinnerVariant = 'default' | 'simple' | 'sun' | 'wave' | 'dots';
export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface SpinnerProps {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
  labelColor?: SpinnerColor;
  className?: string;
}
