import { ChipColor, ChipSize, ChipVariant } from "./Chip.types";

export const baseStyles = "inline-flex items-center  font-medium transition";

export const sizePadding: Record<
  ChipSize,
  { base: string; noLeft: string; noRight: string; noSides: string }
> = {
  sm: {
    base: "px-2 py-0.5",
    noLeft: "pl-1 pr-2 py-0.5",
    noRight: "pl-2 pr-1 py-0.5",
    noSides: "pl-1 pr-1 py-0.5",
  },
  md: {
    base: "px-3 py-1",
    noLeft: "pl-1.5 pr-3 py-1",
    noRight: "pl-3 pr-1.5 py-1",
    noSides: "pl-1.5 pr-1.5 py-1",
  },
  lg: {
    base: "px-4 py-1.5",
    noLeft: "pl-2 pr-4 py-1.5",
    noRight: "pl-4 pr-2 py-1.5",
    noSides: "pl-2 pr-2 py-1.5",
  },
};

export const textSizeMap: Record<ChipSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};


export const radiusStyles: Record<string, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const closeButtonStyles: Record<
  ChipVariant,
  Record<ChipColor, string>
> = {
  solid: {
    default: "hover:bg-black/10 text-black",
    primary: "hover:bg-blue-600/20 text-white",
    secondary: "hover:bg-purple-600/20 text-white",
    success: "hover:bg-green-600/20 text-white",
    warning: "hover:bg-yellow-500/30 text-black",
    danger: "hover:bg-red-600/20 text-white",
  },
  outline: {
    default: "hover:bg-gray-200 text-black",
    primary: "hover:bg-blue-100 text-blue-600",
    secondary: "hover:bg-purple-100 text-purple-600",
    success: "hover:bg-green-100 text-green-600",
    warning: "hover:bg-yellow-100 text-yellow-700",
    danger: "hover:bg-red-100 text-red-600",
  },
  ghost: {
    default: "hover:bg-gray-100 text-black",
    primary: "hover:bg-blue-50 text-blue-600",
    secondary: "hover:bg-purple-50 text-purple-600",
    success: "hover:bg-green-50 text-green-600",
    warning: "hover:bg-yellow-50 text-yellow-700",
    danger: "hover:bg-red-50 text-red-600",
  },
  smooth: {
    default: "hover:bg-gray-200 text-black",
    primary: "hover:bg-blue-200 text-blue-700",
    secondary: "hover:bg-purple-200 text-purple-700",
    success: "hover:bg-green-200 text-green-700",
    warning: "hover:bg-yellow-200 text-yellow-800",
    danger: "hover:bg-red-200 text-red-700",
  },
  faint: {
    default: "hover:bg-gray-100 text-black",
    primary: "hover:bg-blue-100 text-blue-700",
    secondary: "hover:bg-purple-100 text-purple-700",
    success: "hover:bg-green-100 text-green-700",
    warning: "hover:bg-yellow-100 text-yellow-700",
    danger: "hover:bg-red-100 text-red-700",
  },
};



export const colorMap: Record<string, Record<string, string>> = {
  solid: {
    default: "bg-gray-200 text-gray-700",
    primary: "bg-blue-500 text-white",
    secondary: "bg-purple-500 text-white",
    success: "bg-green-500 text-black",
    warning: "bg-yellow-400 text-black",
    danger: "bg-red-500 text-white",
  },
  outline: {
    default: "border border-gray-300 text-gray-500",
    primary: "border border-blue-500 text-blue-500",
    secondary: "border border-purple-500 text-purple-500",
    success: "border border-green-500 text-green-500",
    warning: "border border-yellow-500 text-yellow-500",
    danger: "border border-red-500 text-red-500",
  },
  ghost: {
    default: "bg-transparent text-black hover:bg-gray-100",
    primary: "bg-transparent text-blue-500 hover:bg-blue-50",
    secondary: "bg-transparent text-purple-500 hover:bg-purple-50",
    success: "bg-transparent text-green-500 hover:bg-green-50",
    warning: "bg-transparent text-yellow-500 hover:bg-yellow-100",
    danger: "bg-transparent text-red-500 hover:bg-red-50",
  },
  smooth: {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-blue-100 text-blue-700",
    secondary: "bg-purple-100 text-purple-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-700",
  },
  faint: {
    default: "bg-gray-50 text-gray-700",
    primary: "bg-blue-50 text-blue-700",
    secondary: "bg-purple-50 text-purple-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-yellow-50 text-yellow-700",
    danger: "bg-red-50 text-red-700",
  },
};

export const disabledStyles = "opacity-50 pointer-events-none";
