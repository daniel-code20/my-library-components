import { ReactNode } from "react";

export type ChipColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ChipSize = "sm" | "md" | "lg";
export type ChipRadius = "sm" | "md" | "lg" | "full";
export type ChipVariant = "solid" | "outline" | "ghost" | "smooth" | "faint";
export type AvatarPosition = "start" | "end";

export interface ChipProps {
  children: ReactNode;
  color?: ChipColor;
  size?: ChipSize;
  radius?: ChipRadius;
  variant?: ChipVariant;
  startContent?: ReactNode;
  endContent?: ReactNode;
  avatar?: ReactNode;
  avatarPosition?: AvatarPosition;
  disabled?: boolean;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
}
