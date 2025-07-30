import React from "react";
import { SkeletonProps } from "./Skeleton.types";
import { variantStyles, getSizeStyles } from "./Skeleton.styles";
import clsx from "clsx";
import styles from "./Skeleton.module.css";

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rounded",
  size,
  width,
  height,
  className,
  style,
  ...props
}) => {
  const variantClass = variantStyles[variant];
  const sizeStyles = getSizeStyles({ size, width, height });

  return (
    <div
      className={clsx(
        "bg-gray-300 dark:bg-gray-700",
        styles.skeleton,
        variantClass,
        className
      )}
      style={{ ...sizeStyles, ...style }}
      {...props}
    />
  );
};