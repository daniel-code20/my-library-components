import React, { useState, useEffect, useRef } from "react";
import { TextareaProps } from "./Textarea.types";
import { baseClasses, variantClasses } from "./Textarea.styles";
import clsx from "clsx";

export const Textarea: React.FC<TextareaProps> = ({
  label,
  variant = "flat",
  clearable = false,
  required = false,
  readOnly = false,
  disabled = false,
  minRows = 1,
  maxRows,
  disableAutosize = false,
  className,
  ...props
}) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autosize = () => {
    if (disableAutosize || !textareaRef.current) return;

    textareaRef.current.rows = minRows;
    const scrollHeight = textareaRef.current.scrollHeight;
    const rowHeight = 24;
    let newRows = Math.ceil(scrollHeight / rowHeight);

    if (maxRows) newRows = Math.min(newRows, maxRows);
    textareaRef.current.rows = newRows;
  };

  useEffect(() => {
    autosize();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  const handleClear = () => {
    setValue("");
    if (props.onChange && textareaRef.current) {
      const event = {
        ...new Event("change", { bubbles: true }),
        target: textareaRef.current,
        currentTarget: textareaRef.current,
      } as unknown as React.ChangeEvent<HTMLTextAreaElement>;

      textareaRef.current.value = "";
      props.onChange(event);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <textarea
          {...props}
          ref={textareaRef}
          className={clsx(
            baseClasses,
            variantClasses[variant],
            disabled && "bg-gray-200 cursor-not-allowed",
            readOnly && "bg-gray-100 cursor-default",
            className
          )}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          rows={minRows}
        />

        {clearable && value.length > 0 && !readOnly && !disabled && (
          <button
            type="button"
            aria-label="Clear text"
            onClick={handleClear}
            className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full  text-gray-600 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
