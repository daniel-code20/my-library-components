import { Colors, Variant } from "./Button.types";

export const variantClasses: Record<Colors, Record<Variant, string>> = {
  default: {
    solid: "text-white bg-neutral-600 hover:bg-neutral-600/90",
    outline: "bg-transparent text-neutral-600 border border-neutral-600 hover:text-neutral-700 hover:border-neutral-700",
    ghost: "bg-transparent text-neutral-600 border border-neutral-600 hover:bg-neutral-600 hover:text-white",
    smooth: "bg-neutral-600/20 border border-neutral-600/20 text-neutral-600 hover:bg-neutral-600/30",
    light: "bg-transparent text-neutral-600 hover:bg-neutral-500/20",
  },
  primary: {
    solid: "text-white bg-blue-600 hover:bg-blue-600/90",
    outline: "bg-transparent text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700",
    ghost: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white",
    smooth: "bg-blue-600/20 border border-blue-600/20 text-blue-600 hover:bg-blue-600/30",
    light: "bg-transparent text-blue-600 hover:bg-blue-600/20",
  },
  warning: {
    solid: "text-black bg-amber-500 hover:bg-amber-500/90",
    outline: "bg-transparent text-amber-500 border border-amber-500 hover:text-amber-600 hover:border-amber-600",
    ghost: "bg-transparent text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-white",
    smooth: "bg-amber-500/20 border border-amber-500/20 text-yellow-500 hover:bg-amber-500/30",
    light: "bg-transparent text-amber-500 hover:bg-amber-500/20",
  },
  danger: {
    solid: "text-white bg-rose-500 hover:bg-rose-500/90",
    outline: "bg-transparent text-rose-500 border border-rose-500 hover:text-rose-600 hover:border-rose-600",
    ghost: "bg-transparent text-rose-500 border border-rose-500 hover:bg-rose-500 hover:text-white",
    smooth: "bg-rose-500/20 border border-rose-500/20 text-rose-500 hover:bg-rose-500/30",
    light: "bg-transparent text-rose-500 hover:bg-rose-500/20",
  },
  secondary: {
    solid: "text-white bg-violet-500 hover:bg-violet-500/90",
    outline: "bg-transparent text-violet-500 border border-violet-500 hover:text-violet-600 hover:border-violet-600",
    ghost: "bg-transparent text-violet-500 border border-violet-500 hover:bg-violet-500 hover:text-white",
    smooth: "bg-violet-500/20 border border-violet-500/20 text-violet-500 hover:bg-violet-500/30",
    light: "bg-transparent text-violet-500 hover:bg-violet-500/20",
  },
  success: {
    solid: "text-black bg-green-500 hover:bg-green-500/90",
    outline: "bg-transparent text-green-500 border border-green-500 hover:text-green-600 hover:border-green-600",
    ghost: "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
    smooth: "bg-green-500/20 border border-green-500/20 text-green-500 hover:bg-green-500/30",
    light: "bg-transparent text-green-500 hover:bg-green-500/20",
  },
};
