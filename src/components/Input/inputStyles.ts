import clsx from "clsx";
import type { Colors, InputSize, InputVariant, InputRadius } from "./Input.types";

export const baseClasses =
  "w-full transition-colors duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-60 placeholder-opacity-70";

export const sizeClasses: Record<InputSize, string> = {
  sm: "px-2 py-1 text-sm ",
  md: "px-3 py-2 text-base ",
  lg: "px-4 py-3 text-lg ",
};

export const radiusClasses: Record<InputRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const variantClasses: Record<InputVariant, string> = {
  flat: "border border-transparent focus:border focus:ring-1",
  bordered: "border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
  underlined:
    "border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-500 focus:ring-0",
  faded:
    "bg-gray-50 border border-gray-200 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
};

export const colorClasses: Record<Colors, string> = {
  default:
    "bg-neutral-100 text-neutral-800 placeholder:text-neutral-500 focus:border-neutral-600 focus:ring-neutral-600",
  primary:
    "bg-blue-100 text-blue-800 placeholder:text-blue-400 focus:border-blue-600 focus:ring-blue-600",
  secondary:
    "bg-violet-100 text-violet-800 placeholder:text-violet-400 focus:border-violet-600 focus:ring-violet-600",
  success:
    "bg-green-100 text-green-800 placeholder:text-green-400 focus:border-green-600 focus:ring-green-600",
  warning:
    "bg-amber-100 text-amber-800 placeholder:text-amber-400 focus:border-amber-600 focus:ring-amber-600",
  danger:
    "bg-rose-100 text-rose-800 placeholder:text-rose-400 focus:border-rose-600 focus:ring-rose-600",
};

export function getInputClasses({
  size,
  radius,
  variant,
  color,
  className,
}: {
  size: InputSize;
  radius: InputRadius;
  variant: InputVariant;
  color: Colors;
  className?: string;
}) {
  return clsx(
    baseClasses,
    sizeClasses[size],
    radiusClasses[radius],
    variantClasses[variant],
    colorClasses[color],
    className
  );
}
