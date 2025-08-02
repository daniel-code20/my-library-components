import { ReactNode } from "react";

export type ProgressSize = "sm" | "md" | "lg";
export type ProgressColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";

export interface ProgressProps {
  label?: ReactNode;
  size?: ProgressSize;
  color?: ProgressColor;
  radius?: ProgressRadius;
  value?: number;
  valueLabel?: ReactNode;
  minValue?: number;
  maxValue?: number;
  formatOptions?: Intl.NumberFormatOptions;
  isIndeterminate?: boolean;
  isStriped?: boolean;
  showValueLabel?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  classNames?: Partial<Record<"base" | "labelWrapper" | "label" | "track" | "value" | "indicator", string>>;
}
