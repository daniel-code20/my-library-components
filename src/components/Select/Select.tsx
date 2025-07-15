import React, { useState, useRef, useEffect } from "react";
import type { SelectItem, CustomSelectProps } from "./Select.types";
import {
  container,
  label as labelStyle,
  triggerButton,
  dropdown,
  option,
  optionSelected,
} from "./Select.styles";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export const Select: React.FC<CustomSelectProps> = ({
  items = [],
  label,
  placeholder = "Select an option",
  className,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find((item) => item.key === selectedKey);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: SelectItem) => {
    setSelectedKey(item.key);
    onChange?.(item.key);
    setIsOpen(false);
  };

  return (
    <div className={`${container} ${className || ""}`} ref={dropdownRef}>
      {label && <label className={labelStyle}>{label}</label>}

      <button
        type="button"
        className={triggerButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedItem?.label || placeholder}</span>
        <FiChevronDown
          className={`ml-2 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <ul
        className={`${dropdown} ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible pointer-events-none"
        }`}
      >
        {items.map((item) => {
          const isSelected = selectedKey === item.key;
          return (
            <li
              key={item.key}
              className={`${option} ${isSelected ? optionSelected : ""}`}
              onClick={() => handleSelect(item)}
            >
              <span className="flex-1 truncate">{item.label}</span>
              {isSelected && <FiCheck className="ml-2 text-blue-500 shrink-0" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
