import { Size, Radius } from "./Button.types";

export const sizeClasses: Record<Size, string> = {
  sm: "text-sm py-2 px-4",
  md: "text-base py-2 px-6",
  lg: "text-lg py-2 px-8",
};

export const radiusClasses: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
