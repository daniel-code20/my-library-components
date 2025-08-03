import { ReactNode, KeyboardEvent } from "react";

export type BreadcrumbsVariant = "solid" | "bordered" | "light";
export type BreadcrumbsColor = "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
export type BreadcrumbsSize = "sm" | "md" | "lg";
export type Radius = "none" | "sm" | "md" | "lg" | "full";
export type UnderlineOption = "none" | "active" | "hover" | "focus" | "always";

export interface BreadcrumbsProps {
  children: ReactNode;
  variant?: BreadcrumbsVariant;
  color?: BreadcrumbsColor;
  size?: BreadcrumbsSize;
  radius?: Radius;
  underline?: UnderlineOption;
  separator?: ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  hideSeparator?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  itemClasses?: Partial<Record<"base" | "item" | "separator", string>>;
  classNames?: Partial<Record<"base" | "list" | "ellipsis" | "separator", string>>;
  onAction?: (key: React.Key) => void;
}

export interface BreadcrumbItemProps {
  children: ReactNode;
  isCurrent?: boolean;
  isDisabled?: boolean;
  underline?: UnderlineOption;
  disableAnimation?: boolean;
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPressStart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPressEnd?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLButtonElement>) => void;
}