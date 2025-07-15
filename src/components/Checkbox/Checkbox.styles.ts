export const baseCheckboxClass =
  'peer shrink-0 appearance-none cursor-pointer transition-all border focus:outline-none focus:ring-2 relative flex-shrink-0';

export const sizeStyles: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const radiusStyles: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const colorStyles: Record<string, string> = {
  default: 'border-gray-500 peer-checked:bg-gray-500 peer-checked:border-gray-500 focus:ring-gray-500 peer-checked:text-white',
  primary: 'border-gray-500 peer-checked:bg-blue-500 peer-checked:border-blue-500 focus:ring-blue-500 peer-checked:text-white',
  secondary: 'border-gray-500 peer-checked:bg-violet-500 peer-checked:border-violet-500 focus:ring-gray-500 peer-checked:text-white',
  success: 'border-gray-500 peer-checked:bg-green-500 peer-checked:border-green-500 focus:ring-green-500 peer-checked:text-black',
  warning: 'border-gray-500 peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-checked:text-black focus:ring-yellow-500',
  danger: 'border-gray-500 peer-checked:bg-red-500 peer-checked:border-red-500 focus:ring-red-500 peer-checked:text-white',
};

export const disabledStyles =
  'cursor-not-allowed opacity-50 peer-checked:opacity-70';

export const checkIcon = `
  pointer-events-none
  absolute
  left-1.5
  top-1.5
  w-3
  h-3
  text-white
  opacity-0
  scale-75
  peer-checked:opacity-100
  peer-checked:scale-100
  transition
  duration-200
  ease-in-out
`;

