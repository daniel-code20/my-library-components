export type BadgeVariant = "solid" | "soft" | "outline";

export type BadgeColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeContent?: React.ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  children?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}
