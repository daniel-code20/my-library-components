import React, { useState, useRef, useEffect } from "react";
import type { SelectProps, SelectOption } from "./Select.types";
import {
  container,
  label as labelStyle,
  triggerButton,
  dropdown,
  option,
  optionSelected,
} from "./Select.styles";
import { FiChevronDown } from "react-icons/fi";

export const Select: React.FC<SelectProps> = ({ options, label, className, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.({
      ...props,
      target: { value: option.value },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className={`${container} ${className || ""}`} ref={dropdownRef}>
      {label && <label className={labelStyle}>{label}</label>}

      <button type="button" className={triggerButton} onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selected?.label}</span>
        <FiChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <ul className={dropdown}>
          {options.map((optionItem) => (
            <li
              key={optionItem.value}
              className={`${option} ${
                selected?.value === optionItem.value ? optionSelected : ""
              }`}
              onClick={() => handleSelect(optionItem)}
            >
              {optionItem.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

