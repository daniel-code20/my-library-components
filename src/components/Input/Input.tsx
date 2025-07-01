import React from "react";
import { getInputClasses } from "./inputStyles";
import type { Colors, InputSize, InputVariant, InputRadius } from "./Input.types";


export type { Colors, InputSize, InputVariant };

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
  color?: Colors;
  size?: InputSize;
  radius?: InputRadius;
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error = false,
  color = "default",
  size = "md",
  radius = "md",
  variant = "flat",
  className,
  id,
  disabled,
  placeholder,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  const inputColor = error ? "danger" : color;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`text-sm font-medium ${disabled ? "text-gray-400" : "text-gray-900"}`}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={getInputClasses({
          size,
          radius,
          variant,
          color: inputColor,
          className,
        })}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={error}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        {...props}
      />

      {helperText && (
        <span
          id={`${inputId}-helper`}
          className={`text-xs mt-0.5 ${error ? "text-rose-600" : "text-gray-500"}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
