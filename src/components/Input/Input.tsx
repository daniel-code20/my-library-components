import React from "react";
import clsx from "clsx";
import { getInputClasses } from "./inputStyles"; 
import type {
  Colors,
  InputSize,
  InputVariant,
  InputRadius,
} from "./Input.types";
import { FiCheckCircle } from "react-icons/fi";

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement> &
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "color"
  > {
  color?: Colors;
  size?: InputSize;
  radius?: InputRadius;
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  floatingLabel?: boolean;
  isLoading?: boolean;
  isValid?: boolean; 
  multiline?: boolean;
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
  leftIcon,
  rightIcon,
  floatingLabel = false,
  isLoading,
  isValid, 
  multiline = false,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  const inputColor = error ? "danger" : color;

  const baseInputClasses = clsx(
    "peer w-full transition-all duration-200",
    getInputClasses({
      size,
      radius,
      variant,
      color: inputColor,
      className,
    }),
    leftIcon && "pl-10",
    rightIcon && !isLoading && "pr-10",
    isLoading && "pr-10"
  );

  const sharedProps = {
    id: inputId,
    placeholder: floatingLabel ? " " : placeholder, 
    disabled,
    "aria-invalid": error,
    "aria-describedby": helperText ? `${inputId}-helper` : undefined,
    className: baseInputClasses,
    ...props,
  };

  const renderInputControl = () =>
    multiline ? (
      <textarea
        rows={4}
        {...(sharedProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        {...(sharedProps as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );

  const renderLabel = () =>
    label && (floatingLabel || variant === "underlined") ? (
      <label
        htmlFor={inputId}
        className={clsx(
          "absolute left-0 text-sm pointer-events-none transition-all duration-200",
          size === "sm" &&
            "top-1 peer-placeholder-shown:translate-y-[0.3rem] peer-focus:-translate-y-[0.6rem]",
          size === "md" &&
            "top-2 peer-placeholder-shown:translate-y-[0.5rem] peer-focus:-translate-y-[0.8rem]",
          size === "lg" &&
            "top-3 peer-placeholder-shown:translate-y-[0.7rem] peer-focus:-translate-y-[1.0rem]",
          leftIcon && {
            "peer-placeholder-shown:translate-x-8 peer-focus:translate-x-0":
              true,
          },
          error ? "text-danger-500" : "text-gray-500",
          disabled && "text-gray-400"
        )}
      >
        {label}
      </label>
    ) : label ? (
      <label
        htmlFor={inputId}
        className={`text-sm font-medium mb-1 ${
          disabled ? "text-gray-400" : "text-gray-900"
        }`}
      >
        {label}
      </label>
    ) : null;

  let currentRightIcon = isLoading ? <Spinner /> : rightIcon;
  if (!isLoading && isValid) {
    currentRightIcon = <FiCheckCircle className="text-success-500" />;
  }

  return (
    <div
      className={clsx(
        "flex flex-col w-full",
        floatingLabel || variant === "underlined" ? "relative" : "gap-1",
        className
      )}
    >
      {!(floatingLabel || variant === "underlined") && renderLabel()}
      <div className="relative flex items-center w-full">
        {renderInputControl()}
        {(floatingLabel || variant === "underlined") && renderLabel()}{" "}
        {leftIcon && (
          <span
            className={clsx(
              "absolute left-2 text-gray-500",
              size === "sm" && "top-1/2 -translate-y-1/2",
              size === "md" && "top-1/2 -translate-y-1/2",
              size === "lg" && "top-1/2 -translate-y-1/2"
            )}
          >
            {leftIcon}
          </span>
        )}
        {currentRightIcon && (
          <span
            className={clsx(
              "absolute right-2 text-gray-500 text-xl",
              size === "sm" && "top-1/2 -translate-y-1/2",
              size === "md" && "top-1/2 -translate-y-1/2",
              size === "lg" && "top-1/2 -translate-y-1/2"
            )}
          >
            {currentRightIcon}
          </span>
        )}
      </div>

      {helperText && (
        <span
          id={`${inputId}-helper`}
          className={clsx(
            "text-xs mt-0.5",
            error ? "text-rose-600" : "text-gray-500"
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
