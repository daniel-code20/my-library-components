import React from "react";
import type { CheckboxProps } from "./Checkbox.types";
import { checkboxBase } from "./Checkbox.styles";

export const Checkbox: React.FC<CheckboxProps> = ({ label, className, ...props }) => (
  <label className="inline-flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className={`${checkboxBase} ${className || ""}`} {...props} />
    {label && <span className="text-sm text-gray-700">{label}</span>}
  </label>
);

