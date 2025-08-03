import React from "react";
import { BreadcrumbItemProps } from "./Breadcrumbs.types";

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  isCurrent,
  onPress,
  onPressStart,
  onPressEnd,
  onKeyDown,
  onKeyUp
}) => {
  const commonProps = {
    onClick: onPress,
    onMouseDown: onPressStart,
    onMouseUp: onPressEnd,
    onKeyDown,
    onKeyUp,
    className: isCurrent ? "text-black dark:text-white" : "text-zinc-500",
    "aria-current": isCurrent ? "page" : undefined as "page" | undefined,
  };

  return <button {...commonProps}>{children}</button>;
};
