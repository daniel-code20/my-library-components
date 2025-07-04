import React, { useEffect } from "react";
import clsx from "clsx";
import { getInputClasses } from "./inputStyles";
import type {
  Colors,
  InputSize,
  InputVariant,
  InputRadius,
} from "./Input.types";
import { FiCheckCircle } from "react-icons/fi";

// Spinner de carga
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-current"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z"
    />
  </svg>
);

// Props base
export interface InputPropsBase {
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
}

export type InputProps =
  | ({
      multiline?: false;
    } & InputPropsBase &
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> & {
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
      })
  | ({
      multiline: true;
    } & InputPropsBase &
      Omit<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        "size" | "color"
      > & {
        onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
      });

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
  const [hasValue, setHasValue] = React.useState(
    Boolean(props.value ?? props.defaultValue ?? "")
  );

  useEffect(() => {
    setHasValue(Boolean(props.value ?? props.defaultValue ?? ""));
  }, [props.value, props.defaultValue]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setHasValue(Boolean(e.target.value));
    props.onChange?.(e as never);
  };

  const inputClasses = getInputClasses({
    size,
    radius,
    variant,
    color: inputColor,
    className,
    floatingLabel,
    hasLeftIcon: Boolean(leftIcon),
    hasRightIcon: Boolean(rightIcon || isLoading || isValid),
  });

  const sharedProps = {
    id: inputId,
    placeholder: floatingLabel || variant === "underlined" ? " " : placeholder,
    disabled,
    "aria-invalid": error,
    "aria-describedby": helperText ? `${inputId}-helper` : undefined,
    className: clsx(
      "peer w-full transition-all duration-200",
      inputClasses,
      leftIcon && "pl-10",
      (rightIcon || isLoading || isValid) && "pr-10"
    ),
    onChange: handleChange,
    ...props,
  };

  if (variant === "underlined") {
    delete sharedProps.defaultValue;
  }

  const renderInput = () =>
    multiline ? (
      <textarea
        {...(sharedProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        rows={4}
      />
    ) : (
      <input
        {...(sharedProps as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );

  const renderLabel = () => {
    if (!label) return null;

    const isFloating = floatingLabel;
    const isUnderlined = variant === "underlined";

    if (isFloating || isUnderlined) {
      return (
        <label
          htmlFor={inputId}
          className={clsx(
            "absolute left-3 right-3 text-sm transition-all duration-200 origin-[0] pointer-events-none px-1",
            // Floating label style
            isFloating &&
              clsx(
                "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                "peer-focus:top-2 peer-focus:scale-75 peer-focus:translate-y-0",
                hasValue && "top-2 scale-75 translate-y-0",
                !hasValue &&
                  !props.value &&
                  "top-1/2 -translate-y-1/2 scale-100"
              ),
            // Underlined label style
            isUnderlined &&
              clsx(
                "peer-placeholder-shown:top-[70%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                "peer-focus:top-1 peer-focus:scale-75 peer-focus:translate-y-0",
                hasValue && "top-1 scale-75 translate-y-0",
                !hasValue &&
                  !props.value &&
                  "top-[70%] -translate-y-1/2 scale-100"
              ),
            error ? "text-rose-600" : "text-gray-500",
            disabled && "text-gray-400",
            leftIcon && "ml-6",
            isUnderlined && "font-normal"
          )}
        >
          {label}
        </label>
      );
    }

    return (
      <label
        htmlFor={inputId}
        className={clsx(
          "text-sm font-normal mb-1",
          error ? "text-rose-600" : "text-gray-500",
          disabled && "text-gray-400"
        )}
      >
        {label}
      </label>
    );
  };

  let iconRight = isLoading ? <Spinner /> : rightIcon;
  if (!isLoading && isValid) {
    iconRight = <FiCheckCircle className="text-green-500" />;
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
        {renderInput()}
        {(floatingLabel || variant === "underlined") && renderLabel()}

        {leftIcon && (
          <span className="absolute left-2 text-gray-500 top-1/2 transform -translate-y-1/2">
            {leftIcon}
          </span>
        )}
        {iconRight && (
          <span className="absolute right-2 text-gray-500 top-1/2 transform -translate-y-1/2">
            {iconRight}
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
