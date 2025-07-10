import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FiCheckCircle } from "react-icons/fi";
import { getInputClasses } from "./inputStyles";
import type {
  Colors,
  InputSize,
  InputVariant,
  InputRadius,
} from "./Input.types";

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z" />
  </svg>
);

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
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  type?: string;
  validateInternally?: boolean; // ✅ Nuevo
}

export type InputProps =
  | ({
      multiline?: false;
      type?: string;
    } & InputPropsBase &
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">)
  | ({
      multiline: true;
    } & InputPropsBase &
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "color">);

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      isRequired,
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
      minLength,
      maxLength,
      pattern,
      type = "text",
      validateInternally = true,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    const [hasValue, setHasValue] = useState(
      Boolean(props.value ?? props.defaultValue ?? "")
    );
    const [isTouched, setIsTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // ✅ Usa ref externo si lo hay, o usa uno interno
    const innerRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement | HTMLTextAreaElement>) ?? innerRef;

    const validate = () => {
      if (!validateInternally) return false;

      const val = inputRef.current?.value ?? "";

      if (isRequired && val.trim() === "") {
        setErrorMessage("Este campo es obligatorio");
        return true;
      }

      if (minLength && val.length < minLength) {
        setErrorMessage(`Debe tener al menos ${minLength} caracteres`);
        return true;
      }

      if (maxLength && val.length > maxLength) {
        setErrorMessage(`No debe exceder los ${maxLength} caracteres`);
        return true;
      }

      if (pattern && !(new RegExp(pattern).test(val))) {
        setErrorMessage("El formato no es válido");
        return true;
      }

      if (type === "email" && val) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          setErrorMessage("El correo no es válido");
          return true;
        }
      }

      setErrorMessage("");
      return false;
    };

    useEffect(() => {
      if (!validateInternally) return;

      const form = inputRef.current?.closest("form");
      if (!form) return;

      const handleFormSubmit = (e: Event) => {
        const hasError = validate();
        setIsInvalid(hasError);
        setIsTouched(true);
        if (hasError) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      form.addEventListener("submit", handleFormSubmit);
      return () => form.removeEventListener("submit", handleFormSubmit);
    }, [validateInternally, isRequired, minLength, maxLength, pattern, type]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const val = e.target.value;
      setHasValue(Boolean(val));
      setIsTouched(true);
      const hasError = validate();
      setIsInvalid(hasError);
      props.onChange?.(e as never);
    };

    const showError = error || (isTouched && isInvalid);
    const inputColor = showError ? "danger" : color;

    const inputClasses = getInputClasses({
      size,
      radius,
      variant,
      color: inputColor,
      className,
      floatingLabel,
      hasLeftIcon: Boolean(leftIcon),
      hasRightIcon: Boolean(rightIcon || isLoading || isValid),
      error: showError,
    });

    const sharedProps = {
      id: inputId,
      type,
      placeholder: floatingLabel || variant === "underlined" ? " " : placeholder,
      disabled,
      "aria-invalid": showError,
      "aria-describedby": helperText ? `${inputId}-helper` : undefined,
      className: clsx(
        "peer w-full transition-all duration-200",
        inputClasses,
        leftIcon && "pl-10",
        (rightIcon || isLoading || isValid) && "pr-10"
      ),
      onChange: handleChange,
      ref: inputRef,
      ...props,
    };

    const renderInput = () =>
      multiline ? (
        <textarea {...(sharedProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} rows={4} />
      ) : (
        <input {...(sharedProps as React.InputHTMLAttributes<HTMLInputElement>)} />
      );

    const renderLabel = () => {
      if (!label) return null;
      const requiredMark = isRequired && (
        <span className="text-red-500 ml-0.5">*</span>
      );
      const isFloating = floatingLabel;
      const isUnderlined = variant === "underlined";

      if (isFloating || isUnderlined) {
        return (
          <label
            htmlFor={inputId}
            className={clsx(
              "absolute left-3 right-3 text-sm transition-all duration-200 origin-[0] pointer-events-none",
              isFloating &&
                clsx(
                  "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                  "peer-focus:top-2 peer-focus:scale-75 peer-focus:translate-y-0",
                  hasValue && "top-2 scale-75 translate-y-0",
                  !hasValue && "top-1/2 -translate-y-1/2 scale-100"
                ),
              isUnderlined &&
                clsx(
                  "peer-placeholder-shown:top-[70%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                  "peer-focus:top-1 peer-focus:scale-75 peer-focus:translate-y-0",
                  hasValue && "top-1 scale-75 translate-y-0",
                  !hasValue && "top-[70%] -translate-y-1/2 scale-100"
                ),
              showError ? "text-rose-600" : "text-gray-500",
              disabled && "text-gray-400",
              leftIcon && "ml-6",
              isUnderlined && "font-normal"
            )}
          >
            {label}
            {requiredMark}
          </label>
        );
      }

      return (
        <label
          htmlFor={inputId}
          className={clsx(
            "text-sm font-normal mb-1",
            showError ? "text-rose-600" : "text-gray-500",
            disabled && "text-gray-400"
          )}
        >
          {label}
          {requiredMark}
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

        {(helperText || showError) && (
          <span
            id={`${inputId}-helper`}
            className={clsx(
              "text-xs mt-0.5",
              showError ? "text-rose-600" : "text-gray-500"
            )}
          >
            {showError ? errorMessage || helperText : helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";


