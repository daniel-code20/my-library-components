export type Colors = "default" | "primary" | "warning" | "danger" | "violet" | "green";
export type Size = "sm" | "md" | "lg";
export type Radius = "none" | "sm" | "md" | "lg" | "full";
export type Variant = "solid" | "outline" | "ghost" | "smooth" |"light";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  size?: Size;
  radius?: Radius;
  variant?: Variant;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}
