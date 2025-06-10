import { Colors, Variant } from "./Button.types";

export const variantClasses: Record<Colors, Record<Variant, string>> = {
  default: {
    solid: "text-white bg-gray-500 hover:bg-gray-500/90",
    outline: "bg-transparent text-gray-500 border border-gray-500 hover:text-gray-600 hover:border-gray-600",
    ghost: "bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",
    smooth: "bg-gray-500/20 text-gray-500 hover:bg-gray-500/30",
    light: "bg-transparent text-gray-500 hover:bg-gray-500/20",
  },
  primary: {
    solid: "text-white bg-blue-500 hover:bg-blue-500/90",
    outline: "bg-transparent text-blue-500 border border-blue-500 hover:text-blue-600 hover:border-blue-600",
    ghost: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
    smooth: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
    light: "bg-transparent text-blue-500 hover:bg-blue-500/20",
  },
  warning: {
    solid: "text-black bg-amber-500 hover:bg-amber-500/90",
    outline: "bg-transparent text-amber-500 border border-amber-500 hover:text-amber-600 hover:border-amber-600",
    ghost: "bg-transparent text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-white",
    smooth: "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30",
    light: "bg-transparent text-amber-500 hover:bg-amber-500/20",
  },
  danger: {
    solid: "text-white bg-rose-500 hover:bg-rose-500/90",
    outline: "bg-transparent text-rose-500 border border-rose-500 hover:text-rose-600 hover:border-rose-600",
    ghost: "bg-transparent text-rose-500 border border-rose-500 hover:bg-rose-500 hover:text-white",
    smooth: "bg-rose-500/20 text-rose-500 hover:bg-rose-500/30",
    light: "bg-transparent text-rose-500 hover:bg-rose-500/20",
  },
  violet: {
    solid: "text-white bg-violet-500 hover:bg-violet-500/90",
    outline: "bg-transparent text-violet-500 border border-violet-500 hover:text-violet-600 hover:border-violet-600",
    ghost: "bg-transparent text-violet-500 border border-violet-500 hover:bg-violet-500 hover:text-white",
    smooth: "bg-violet-500/20 text-violet-500 hover:bg-violet-500/30",
    light: "bg-transparent text-violet-500 hover:bg-violet-500/20",
  },
  green: {
    solid: "text-white bg-green-500 hover:bg-green-500/90",
    outline: "bg-transparent text-green-500 border border-green-500 hover:text-green-600 hover:border-green-600",
    ghost: "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
    smooth: "bg-green-500/20 text-green-500 hover:bg-green-500/30",
    light: "bg-transparent text-green-500 hover:bg-green-500/20",
  },
};
