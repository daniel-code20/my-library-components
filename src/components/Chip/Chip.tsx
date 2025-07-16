import React from "react";
import clsx from "clsx";
import { ChipProps } from "./Chip.types";
import {
  baseStyles,
  sizePadding,
  radiusStyles,
  colorMap,
  disabledStyles,
  closeButtonStyles,
  textSizeMap,
} from "./Chip.styles";

export const Chip: React.FC<ChipProps> = ({
  children,
  color = "default",
  size = "md",
  radius = "md",
  variant = "solid",
  startContent,
  endContent,
  avatar,
  avatarPosition,
  disabled = false,
  closable = false,
  onClose,
  className,
}) => {
      const hasStartVisual = (avatar && avatarPosition === "start") || startContent;
  const hasEndVisual =
    (avatar && avatarPosition === "end") || endContent || closable;

  let paddingClasses = sizePadding[size].base;
  if (hasStartVisual && hasEndVisual) {
    paddingClasses = sizePadding[size].noSides;
  } else if (hasStartVisual) {
    paddingClasses = sizePadding[size].noLeft;
  } else if (hasEndVisual) {
    paddingClasses = sizePadding[size].noRight;
  }

  const chipClasses = clsx(
  baseStyles,
  paddingClasses,
  radiusStyles[radius],
  colorMap[variant][color],
  disabled && disabledStyles,
  className
);

  const avatarSizes: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

const avatarElement = avatar && (
  <span
    className={clsx(
      "flex-shrink-0 rounded-full overflow-hidden",
      avatarSizes[size],
      {
        "mr-1": avatarPosition === "start",
        "ml-1": avatarPosition === "end",
      }
    )}
  >
    {avatar}
  </span>
);

  return (
    <span className={chipClasses}>
      {avatarPosition === "start" && avatarElement}
      {startContent && <span className="mr-1">{startContent}</span>}
      <span className={textSizeMap[size]}>{children}</span>
      {endContent && <span className="ml-1">{endContent}</span>}
      {avatarPosition === "end" && avatarElement}
      {closable && (
        <button
          onClick={onClose}
          className={clsx(
            "ml-1 w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-200",
            closeButtonStyles[variant][color]
          )}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Chip;
