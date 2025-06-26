import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { variantClasses } from "./ButtonVariants";
import { radiusClasses } from "./ButtonStyles";
import { ToggleSwitchProps } from "./Button.types";

const THUMB_MARGIN = 4;

const thumbTranslateValueMap = {
  sm: `${36 - 12 - (THUMB_MARGIN * 2)}px`,
  md: `${44 - 16 - (THUMB_MARGIN * 2)}px`,
  lg: `${56 - 20 - (THUMB_MARGIN * 2)}px`,
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  color = "primary",
  size = "md",
  radius = "full",
  variant = "solid",
  label,
  className = "",
  disabled,
  defaultChecked,
  checked: controlledChecked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (controlledChecked === undefined) {
      setIsChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const trackActiveStyle = variantClasses[color][variant];
  const trackInactiveStyle = "bg-gray-300";
  const currentRadius = radiusClasses[radius];

  const thumbTranslateStyle = {
    transform: isChecked ? `translateX(${thumbTranslateValueMap[size]})` : "translateX(0px)",
  };

  const thumbClasses = clsx(
    "absolute top-1/2 -translate-y-1/2 bg-white rounded-full transition-transform duration-200 ease-in-out left-[4px]",
    {
      "w-3 h-3": size === "sm",
      "w-4 h-4": size === "md",
      "w-5 h-5": size === "lg",
      "shadow-md": isChecked,
    }
  );

  const trackClasses = clsx(
    "relative inline-flex items-center flex-shrink-0 cursor-pointer transition-colors duration-200 ease-in-out",
    {
      "w-9 h-5": size === "sm",
      "w-11 h-6": size === "md",
      "w-14 h-7": size === "lg",
    },
    currentRadius,
    isChecked ? trackActiveStyle : trackInactiveStyle
  );

  return (
    <label
      className={clsx(
        "inline-flex items-center gap-3",
        { "cursor-not-allowed opacity-60": disabled },
        className
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
        disabled={disabled}
        {...props}
      />
      <div className={trackClasses}>
        <span className={thumbClasses} style={thumbTranslateStyle}></span>
      </div>
      {label && (
        <span className="text-gray-700 dark:text-gray-200">{label}</span>
      )}
    </label>
  );
};
