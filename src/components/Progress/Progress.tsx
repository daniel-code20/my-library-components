import React from "react";
import { ProgressProps } from "./Progress.types";
import clsx from "clsx";
import { colorClasses, radiusClasses, sizeClasses, trackColor } from "./Progress.styles";

export const Progress: React.FC<ProgressProps> = ({
  label,
  size = "md",
  color = "primary",
  radius = "full",
  value = 0,
  valueLabel,
  minValue = 0,
  maxValue = 100,
  formatOptions = { style: "percent" },
  isIndeterminate = false,
  isStriped = false,
  showValueLabel = true,
  isDisabled = false,
  disableAnimation = false,
  classNames = {},
}) => {
  const percent = Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1);
  const formattedValue = new Intl.NumberFormat("en-US", formatOptions).format(percent);

  return (
    <div className={clsx("w-full", classNames.base)}>
      {(label || showValueLabel) && (
        <div className={clsx("flex justify-between mb-1", classNames.labelWrapper)}>
          {label && <span className={clsx("text-sm", classNames.label)}>{label}</span>}
          {showValueLabel && (
            <span className={clsx("text-sm", classNames.value)}>
              {valueLabel ?? formattedValue}
            </span>
          )}
        </div>
      )}
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          trackColor,
          sizeClasses[size],
          radiusClasses[radius],
          classNames.track,
          isDisabled && "opacity-50 pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "absolute inset-y-0 left-0",
            colorClasses[color],
            radiusClasses[radius],
            classNames.indicator,
            {
              "w-full animate-pulse": isIndeterminate,
              "transition-all duration-500 ease-in-out": !disableAnimation,
              "bg-stripes": isStriped && !isIndeterminate,
            }
          )}
          style={!isIndeterminate ? { width: `${percent * 100}%` } : undefined}
        />
      </div>
    </div>
  );
};
