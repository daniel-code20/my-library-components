import React, { Children, isValidElement } from "react";
import clsx from "clsx";
import { BreadcrumbItemProps, BreadcrumbsProps } from "./Breadcrumbs.types";
import {
  sizeMap,
  radiusMap,
  variantMap,
  colorMap,
} from "./Breadcrumbs.styles";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  variant = "solid",
  color = "foreground",
  size = "md",
  radius = "md",
  underline = "none",
  separator = "/",
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  hideSeparator = false,
  isDisabled = false,
  disableAnimation = false,
  itemClasses = {},
  classNames = {},
  onAction,
}) => {
  const allChildren = Children.toArray(children).filter(isValidElement);

  const shouldCollapse = maxItems && allChildren.length > maxItems;
  const visibleItems = shouldCollapse
    ? [
        ...allChildren.slice(0, itemsBeforeCollapse),
        <span key="ellipsis" className={clsx("cursor-default", classNames?.ellipsis)}>...</span>,
        ...allChildren.slice(allChildren.length - itemsAfterCollapse),
      ]
    : allChildren;

  return (
    <nav
      className={clsx("inline-flex", sizeMap[size], variantMap[variant], radiusMap[radius], colorMap[color], classNames?.base)}
      aria-label="Breadcrumb"
    >
      <ol className={clsx("flex items-center", classNames?.list)}>
        {visibleItems.map((child, index) => {
          const isLast = index === visibleItems.length - 1;

          const onClick = () => {
            if (onAction && child && React.isValidElement(child)) {
              onAction(child.key ?? index);
            }
          };

          const cloned = React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<BreadcrumbItemProps>, {
                onPress: onClick,
                underline,
                isDisabled,
                disableAnimation,
                isCurrent: isLast,
              })
            : child;

          return (
            <li key={index} className={clsx("flex items-center", itemClasses?.item)}>
              {cloned}
              {!hideSeparator && !isLast && (
                <span className={clsx("mx-2 text-zinc-500", classNames?.separator, itemClasses?.separator)}>
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
