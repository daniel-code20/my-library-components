import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { variantClasses } from "./ButtonVariants";
import { radiusClasses } from "./ButtonStyles";
import { ToggleSwitchProps } from "./Button.types";

const THUMB_MARGIN = 4;

const toggleSizeClasses = {
  sm: {
    track: "w-9 h-5",
    thumb: "w-3 h-3",
    thumbTranslateValue: `${36 - 12 - (THUMB_MARGIN * 2)}px`,
  },
  md: {
    track: "w-11 h-6",
    thumb: "w-4 h-4",
    thumbTranslateValue: `${44 -16 - (THUMB_MARGIN * 2)}px`,
  },
  lg: {
    track: "w-14 h-7",
    thumb: "w-5 h-5",
    thumbTranslateValue: `${56 - 20 - (THUMB_MARGIN * 2)}px`,
  },
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

  const currentToggleSize = toggleSizeClasses[size] || toggleSizeClasses["md"];
  const currentRadius = radiusClasses[radius];

  const trackActiveStyle = variantClasses[color][variant];
  const trackInactiveStyle = "bg-gray-300";

  const thumbTransformStyle = {
    transform: isChecked
      ? `translateX(${currentToggleSize.thumbTranslateValue})`
      : "translateX(0px)",
  };

  const thumbClasses = clsx(
    "absolute top-1/2 -translate-y-1/2 bg-white rounded-full transition-transform duration-200 ease-in-out",
    currentToggleSize.thumb,
    "left-[4px]",
    {
      "shadow-md": isChecked,
    }
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
      <div
        className={clsx(
          "relative inline-flex items-center flex-shrink-0 cursor-pointer transition-colors duration-200 ease-in-out",
          currentToggleSize.track,
          currentRadius,
          isChecked ? trackActiveStyle : trackInactiveStyle
        )}
      >
        <span className={thumbClasses} style={thumbTransformStyle}></span>
      </div>
      {label && (
        <span className="text-gray-700 dark:text-gray-200">{label}</span>
      )}
    </label>
  );
};
