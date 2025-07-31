import clsx from "clsx";
import { BadgeSize } from "./Badge.types";

export const baseBadge =
  "inline-flex items-center justify-center rounded-full font-medium";

export const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    default: "bg-gray-500 text-white",
    primary: "bg-blue-600 text-white",
    secondary: "bg-violet-600 text-white",
    success: "bg-green-600 text-black",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-600 text-white",
  },
  soft: {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  },
  outline: {
    default: "border border-gray-400 text-gray-800",
    primary: "border border-blue-500 text-blue-700",
    secondary: "border border-gray-500 text-gray-700",
    success: "border border-green-500 text-green-700",
    warning: "border border-yellow-500 text-yellow-700",
    danger: "border border-red-500 text-red-700",
  },
};

export const positionClasses: Record<string, string> = {
  "top-right": "-top-1 -right-1",
  "top-left": "-top-1 -left-1",
  "bottom-right": "-bottom-1 -right-1",
  "bottom-left": "-bottom-1 -left-1",
};


export const sizeClasses: Record<BadgeSize, string> = {
  sm: "text-[8px] w-3 h-3",  
  md: "text-[12px] w-6 h-6",   
  lg: "text-sm w-8 h-8",       
};

export const getBadgeClasses = (variant: string, color: string) =>
  clsx(baseBadge, variantStyles[variant]?.[color]);
