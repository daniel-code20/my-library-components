import React from "react";
import { IconButtonProps } from "./Button.types";
import clsx from "clsx";
import { variantClasses } from "./ButtonVariants";
import { radiusClasses } from "./ButtonStyles";

// Nuevos tamaños específicos para IconButton
const iconButtonSizeClasses = {
  sm: "w-8 h-8 text-lg",     // ≈ 32px botón, ícono ~18px
  md: "w-10 h-10 text-xl",   // ≈ 40px botón, ícono ~20px
  lg: "w-12 h-12 text-2xl",  // ≈ 48px botón, ícono ~24px
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "default",
  size = "md",
  radius = "full",
  variant = "solid",
  loading = false,
  className = "",
  disabled,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center transition-colors duration-200";
  const variantStyle = variantClasses[color][variant];
  const sizeStyle = iconButtonSizeClasses[size] || iconButtonSizeClasses["md"];

  return (
    <button
      className={clsx(
        base,
        sizeStyle,
        radiusClasses[radius],
        variantStyle,
        className,
        {
          "opacity-60 font-normal cursor-not-allowed pointer-events-none":
            disabled || loading,
        }
      )}
      disabled={disabled || loading}
      {...props}
    >
      <span className={clsx({ "animate-spin": loading })}>
        {icon}
      </span>
    </button>
  );
};
