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
  default:
    "text-gray-700 dark:text-gray-300 data-[active=true]:text-black dark:data-[active=true]:text-white",
  primary:
    "text-gray-700 data-[active=true]:text-white data-[active=true]:bg-blue-500",
  secondary:
    "text-gray-700 data-[active=true]:text-white data-[active=true]:bg-violet-500",
  success:
    "text-gray-700 data-[active=true]:text-black data-[active=true]:bg-green-500",
  warning:
    "text-gray-700 data-[active=true]:text-black data-[active=true]:bg-yellow-500",
  danger:
    "text-gray-700 data-[active=true]:text-black data-[active=true]:bg-red-500",
};

export const variantClasses: Record<string, string> = {
  light: "data-[active=true]:bg-white data-[active=true]:border border-gray-200 text-black dark:text-black dark:data-[active=true]:bg-white dark:data-[active=true]:text-black dark:data-[active=true]:shadow-sm",
  underline: `bg-transparent border-b-2 border-transparent text-gray-500 data-[active=true]:border-black data-[active=true]:text-black`,
  bordered:
    "border border-transparent data-[active=true]:border-gray-300 data-[active=true]:bg-gray-100 dark:data-[active=true]:bg-white dark:data-[active=true]:shadow-sm",
  solid:
    "data-[active=true]:bg-white text-black dark:text-black dark:data-[active=true]:bg-white dark:data-[active=true]:text-black dark:data-[active=true]:shadow-sm",
};

export const containerVariantClasses: Record<string, string> = {
  light: "bg-transparent",
  underline: "bg-transparent",
  bordered: "border rounded-lg border-gray-300 bg-white dark:bg-white p-1",
  solid: "bg-gray-100 dark:bg-gray-100 p-1 rounded-lg",
};
