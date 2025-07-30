export type AvatarRadius = 'full' | 'lg' | 'md' |'sm' | 'none';
export type AvatarVariant = 'default' | 'bordered';
export type AvatarColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  radius?: AvatarRadius;
  variant?: AvatarVariant;
  disabled?: boolean;
  color?: AvatarColor;
  borderColor?: AvatarColor;
  fallback?: React.ReactNode;
}
