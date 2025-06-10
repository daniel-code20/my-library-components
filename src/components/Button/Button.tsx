import React from "react";
import { ButtonProps } from "./Button.types";
import { FiLoader } from "react-icons/fi";
import clsx from "clsx";
import { variantClasses } from "./ButtonVariants";
import { sizeClasses, radiusClasses } from "./ButtonStyles";

export const Button: React.FC<ButtonProps> = ({
  color = "default",
  size = "md",
  radius = "md",
  variant = "solid",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 font-medium transition-colors duration-200 justify-center";

  const variantStyle = variantClasses[color][variant];

  return (
    <button
      className={clsx(
        base,
        sizeClasses[size],
        radiusClasses[radius],
        variantStyle,
        className,
        { "opacity-60 cursor-not-allowed": disabled || loading }
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <FiLoader className="animate-spin" />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
