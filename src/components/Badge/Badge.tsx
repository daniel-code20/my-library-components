import React from "react";
import { BadgeProps } from "./Badge.types";
import { getBadgeClasses, positionClasses, sizeClasses } from "./Badge.styles";

export const Badge: React.FC<BadgeProps> = ({
  badgeContent,
  variant = "solid",
  color = "default",
  size = "md",
  children,
  position = "top-right",
  className,
  ...props
}) => {
  const badgeClass = getBadgeClasses(variant, color);
  const sizeClass = sizeClasses[size];
  const positionClass = positionClasses[position];

  if (children) {
    return (
      <div className="relative inline-block" {...props}>
        {children}
        {badgeContent != null && (
          <span
            className={`${badgeClass} ${sizeClass} absolute ${positionClass} flex items-center justify-center`}
          >
            {badgeContent}
          </span>
        )}
      </div>
    );
  }

  return (
    <span
      className={`${badgeClass} ${sizeClass} ${className ?? ""}`}
      {...props}
    >
      {badgeContent}
    </span>
  );
};
