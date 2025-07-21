import React from "react";
import clsx from "clsx";
import { TabsProps } from "./Tabs.types";
import {
  sizeClasses,
  radiusClasses,
  colorClasses,
  variantClasses,
  containerVariantClasses,
} from "./Tabs.styles";

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedIndex,
  onChange,
  size = "md",
  radius = "md",
  color = "default",
  variant = "light",
  className = "",
}) => {
  const isUnderline = variant === "underline";

  return (
    <div
      className={clsx(
        "inline-flex items-center",
        variant === "underline" ? "gap-6" : "gap-1",
        containerVariantClasses[variant],
        className
      )}
      role="tablist"
    >
      {tabs.map((tab, index) => {
        const isActive = selectedIndex === index;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(index)}
            data-active={isActive}
            className={clsx(
              "transition-all duration-200 ease-in-out flex items-center gap-2 focus:outline-none",
              !isUnderline && sizeClasses[size],
              !isUnderline && radiusClasses[radius],
              variantClasses[variant],
              !isUnderline && colorClasses[color],
              isActive ? "font-normal" : "opacity-70 hover:opacity-100"
            )}
            aria-selected={isActive}
            aria-controls={`tabpanel-${index}`}
            role="tab"
          >
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
