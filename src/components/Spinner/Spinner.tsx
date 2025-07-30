import React from "react";
import styles from "./Spinner.module.css";
import { SpinnerProps } from "./Spinner.types";
import {
  sizeMap,
  labelColorMap,
  bgColorMap,
  borderColorMap,
} from "./Spinner.styles";
import clsx from "clsx";

export const Spinner: React.FC<SpinnerProps> = ({
  variant = "default",
  size = "md",
  color = "default",
  label,
  labelColor = "default",
  className,
}) => {
  const sizeClass = sizeMap[size];
  const bgColorClass = bgColorMap[color];
  const borderColorClass = borderColorMap[color];

  const renderSpinner = () => {
    switch (variant) {
      case "simple":
        return (
          <div
            className={clsx(
              "rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent",
              sizeClass,
              borderColorClass,
              styles.spin
            )}
          />
        );

      case 'sun':
        return (
          <div
            className={clsx(
              'rounded-full opacity-70',
              sizeClass,
              bgColorClass,
              styles.pulse
            )}
          />

        );

      case "wave":
        return (
          <div className="flex gap-1 items-end">
            {[0, 1, 2].map((_, i) => (
              <span
                key={i}
                className={clsx(
                  "w-1.5 h-4 rounded-sm",
                  bgColorClass,
                  styles.bounce
                )}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      case "dots":
        return (
          <div className="flex gap-1 items-center">
            {[0, 1, 2].map((_, i) => (
              <span
                key={i}
                className={clsx(
                  "w-2 h-2 rounded-full",
                  bgColorClass,
                  styles.fade
                )}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div
            className={clsx(
              "relative rounded-full border-2 border-t-transparent",
              sizeClass,
              borderColorClass,
              styles.spin
            )}
          />
        );
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-2",
        className
      )}
    >
      {renderSpinner()}
      {label && (
        <span className={clsx("text-sm", labelColorMap[labelColor])}>
          {label}
        </span>
      )}
    </div>
  );
};
