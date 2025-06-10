import { Size, Radius } from "./Button.types";

export const sizeClasses: Record<Size, string> = {
  sm: "text-sm py-1 px-3",
  md: "text-base py-2 px-4",
  lg: "text-lg py-3 px-6",
};

export const radiusClasses: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
