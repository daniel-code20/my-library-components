import clsx from "clsx";
import type {
  InputColors ,
  InputSize,
  InputVariant,
  InputRadius,
} from "./Input.types";

export const baseClasses =
  "peer w-full transition-all duration-200 outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-60 placeholder-opacity-70 ";

export const sizeClasses: Record<InputSize, string> = {
  xs: "h-7 text-xs",
  sm: "h-8 text-sm",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
  xl: "h-14 text-xl",
};

export const radiusClasses: Record<InputRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const variantStyles = {
  flat: {
    base: "border border-transparent",
    color: {
      default:
        "bg-neutral-100 text-neutral-800 placeholder:text-neutral-500 focus:bg-white focus:border-neutral-400 focus:ring-neutral-200",
      primary:
        "bg-blue-100 text-blue-800 placeholder:text-blue-400 focus:bg-white focus:border-blue-400 focus:ring-blue-200",
      secondary:
        "bg-violet-100 text-violet-800 placeholder:text-violet-400 focus:bg-white focus:border-violet-400 focus:ring-violet-200",
      success:
        "bg-green-100 text-green-800 placeholder:text-green-400 focus:bg-white focus:border-green-400 focus:ring-green-200",
      warning:
        "bg-amber-100 text-amber-800 placeholder:text-amber-400 focus:bg-white focus:border-amber-400 focus:ring-amber-200",
      danger:
        "bg-rose-100 text-rose-800 placeholder:text-rose-400 focus:bg-white focus:border-rose-400 focus:ring-rose-200",
    },
  },
  bordered: {
    base: "border",
    color: {
      default:
        "border-gray-300 focus:border-gray-500 focus:ring-gray-100 text-neutral-800",
      primary:
        "border-blue-300 focus:border-blue-500 focus:ring-blue-100 text-blue-800",
      secondary:
        "border-violet-300 focus:border-violet-500 focus:ring-violet-100 text-violet-800",
      success:
        "border-green-300 focus:border-green-500 focus:ring-green-100 text-green-800",
      warning:
        "border-amber-300 focus:border-amber-500 focus:ring-amber-100 text-amber-800",
      danger:
        "border-rose-500 focus:border-rose-500 focus:ring-rose-100 text-rose-800",
    },
  },
  underlined: {
    base: "border-b bg-transparent focus:outline-none rounded-none",
    color: {
      default:
        "border-gray-300 focus:border-gray-500 focus:border-b-2 text-neutral-800 ",
      primary:
        "border-blue-300 focus:border-blue-500 focus:border-b-2 text-blue-800 ",
      secondary:
        "border-violet-300 focus:border-violet-500 focus:border-b-2 text-violet-800 ",
      success:
        "border-green-300 focus:border-green-500 focus:border-b-2 text-green-800 ",
      warning:
        "border-amber-300 focus:border-amber-500 focus:border-b-2 text-amber-800 ",
      danger:
        "border-rose-500 focus:border-rose-500 focus:border-b-2 text-rose-800 ",
    },
  },
  faded: {
    base: "border",
    color: {
      default:
        "bg-neutral-50 border-neutral-200 text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-neutral-200",
      primary:
        "bg-blue-50 border-blue-200 text-blue-700 placeholder:text-blue-500 focus:border-blue-500 focus:ring-blue-200",
      secondary:
        "bg-violet-50 border-violet-200 text-violet-700 placeholder:text-violet-500 focus:border-violet-500 focus:ring-violet-200",
      success:
        "bg-green-50 border-green-200 text-green-700 placeholder:text-green-500 focus:border-green-500 focus:ring-green-200",
      warning:
        "bg-amber-50 border-amber-200 text-amber-700 placeholder:text-amber-500 focus:border-amber-500 focus:ring-amber-200",
      danger:
        "bg-rose-50 border-rose-200 text-rose-700 placeholder:text-rose-500 focus:border-rose-500 focus:ring-rose-200", // Default danger for faded
    },
  },
};

export function getInputClasses({
  size,
  radius,
  variant,
  color,
  hasLeftIcon,
  hasRightIcon,
  floatingLabel = false,
  className,
  error = false,
}: {
  size: InputSize;
  radius: InputRadius;
  variant: InputVariant;
  color: InputColors ;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  floatingLabel?: boolean;
  className?: string;
  error?: boolean;
}) {
  const variantClassSet = variantStyles[variant];

  const paddingX = {
    xs: "px-3",
    sm: "px-3",
    md: "px-3",
    lg: "px-3",
    xl: "px-3",
  };

  const paddingY = {
    xs: floatingLabel || variant === "underlined" ? "pt-6 pb-2" : "py-1",
    sm: floatingLabel || variant === "underlined" ? "pt-8 pb-3.5" : "py-2",
    md: floatingLabel || variant === "underlined" ? "pt-8.5 pb-5" : "py-2",
    lg: floatingLabel || variant === "underlined" ? "pt-9 pb-5" : "py-2",
    xl: floatingLabel || variant === "underlined" ? "pt-10 pb-4" : "py-3",
  };

  const errorClasses = error
    ? [
        errorStateClasses.border,
        errorStateClasses.bg,
        errorStateClasses.placeholder,
        errorStateClasses.focusBorder,
        errorStateClasses.focusRing,
      ]
    : [];

  return clsx(
    baseClasses,
    sizeClasses[size],
    radiusClasses[radius],
    variantClassSet.base,
    error ? errorClasses : variantClassSet.color[color],
    paddingX[size],
    paddingY[size],
    hasLeftIcon && "pl-10",
    hasRightIcon && "pr-10",
    className
  );
}

export const errorStateClasses = {
  label: "text-rose-800",
  text: "text-rose-800",
  placeholder: "placeholder:text-rose-400",
  border: "border-rose-500",
  ring: "ring-rose-100",
  focusBorder: "focus:border-rose-600",
  focusRing: "focus:ring-rose-200",
  bg: "bg-rose-50",
};
