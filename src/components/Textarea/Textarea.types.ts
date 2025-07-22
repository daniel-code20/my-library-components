import { TextareaHTMLAttributes } from "react";

export type Variant = "flat" | "faded" | "bordered" | "underlined";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: Variant;
  clearable?: boolean;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  minRows?: number;
  maxRows?: number;
  disableAutosize?: boolean;
  className?: string;
}
