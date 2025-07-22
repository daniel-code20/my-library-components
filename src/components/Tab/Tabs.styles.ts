import clsx from "clsx";

export const sizeClasses: Record<string, string> = {
  sm: "text-sm px-3 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

export const radiusClasses: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const colorClasses: Record<string, string> = {
  default: "data-[active=true]:text-black",
  primary: "data-[active=true]:text-blue-500",
  secondary: "data-[active=true]:text-violet-500",
  success: "data-[active=true]:text-green-500",
  warning: "data-[active=true]:text-yellow-500",
  danger: "data-[active=true]:text-red-500",
};

export const variantClasses: Record<string, string> = {
  light:
    "bg-transparent data-[active=true]:bg-opacity-100 data-[active=true]:shadow-sm",

  underline:
    "bg-transparent border-b-2 border-transparent data-[active=true]:border-current",

  solid:
    "bg-transparent data-[active=true]:bg-opacity-100 data-[active=true]:shadow-sm",

  bordered:
    "border border-transparent data-[active=true]:border-gray-300 data-[active=true]:shadow-sm",
};

export const containerVariantClasses: Record<string, string> = {
  light: "bg-transparent",
  underline: "bg-transparent",
  bordered: "border rounded-lg border-gray-300 bg-white dark:bg-white p-1",
  solid: "bg-gray-100 dark:bg-gray-100 p-1 rounded-lg",
};

export const variantColorClasses: Record<string, Record<string, string>> = {
  solid: {
    default:
      "data-[active=true]:bg-white data-[active=true]:text-black dark:data-[active=true]:text-black",
    primary: "data-[active=true]:bg-blue-500 data-[active=true]:text-white",
    secondary: "data-[active=true]:bg-violet-500 data-[active=true]:text-white",
    success:
      "data-[active=true]:bg-green-500 data-[active=true]:text-black dark:data-[active=true]:text-black",
    warning:
      "data-[active=true]:bg-yellow-400 data-[active=true]:text-black dark:data-[active=true]:text-black",
    danger: "data-[active=true]:bg-red-500 data-[active=true]:text-white",
  },

  bordered: {
    default: "",
    primary:
      "data-[active=true]:border-blue-500 data-[active=true]:text-blue-500",
    secondary:
      "data-[active=true]:border-violet-500 data-[active=true]:text-violet-500",
    success:
      "data-[active=true]:border-green-500 data-[active=true]:text-green-500",
    warning:
      "data-[active=true]:border-yellow-500 data-[active=true]:text-yellow-500",
    danger: "data-[active=true]:border-red-500 data-[active=true]:text-red-500",
  },
  light: {
    default: "data-[active=true]:text-black",
    primary: "data-[active=true]:bg-blue-500 data-[active=true]:text-white",
    secondary: "data-[active=true]:bg-violet-500 data-[active=true]:text-white",
    success:
      "data-[active=true]:bg-green-500 data-[active=true]:text-black dark:data-[active=true]:text-black",
    warning:
      "data-[active=true]:bg-yellow-400 data-[active=true]:text-black dark:data-[active=true]:text-black",
    danger: "data-[active=true]:bg-red-500 data-[active=true]:text-white",
  },

  underline: {},
};

export const getContainerClasses = (
  variant: string,
  size: string,
  radius: string,
  color: string
): string => {
  const base = 'inline-flex items-center';

  const paddingBySize: Record<string, string> = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
  };

  const radiusBySize: Record<string, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const borderColorByVariantAndColor: Record<string, Record<string, string>> = {
    bordered: {
      default: 'border-gray-300',
      primary: 'border-blue-500',
      secondary: 'border-violet-500',
      success: 'border-green-500',
      warning: 'border-yellow-500',
      danger: 'border-red-500',
    },
  };

  switch (variant) {
    case 'bordered':
      return clsx(
        base,
        'border',
        paddingBySize[size] ?? 'p-2',
        radiusBySize[radius] ?? 'rounded-md',
        borderColorByVariantAndColor.bordered[color] ?? 'border-gray-300',
        'bg-white dark:bg-white',
        'gap-1'
      );

    case 'solid':
      return clsx(
        base,
        paddingBySize[size] ?? 'p-2',
        radiusBySize[radius] ?? 'rounded-md',
        'bg-gray-100 dark:bg-gray-100',
        'gap-1'
      );

    case 'light':
    case 'underline':
    default:
      return clsx(base, 'gap-1');
  }
};
