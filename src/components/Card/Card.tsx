import React from "react";
import clsx from "clsx";
import {
  CardRootProps,
  CardImageProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from "./Card.types";

// Root
export const Card: React.FC<CardRootProps> = ({ children, className, ...props }) => (
  <div
    className={clsx("max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden", className)}
    {...props}
  >
    {children}
  </div>
);

// Imagen superior
export const CardImage: React.FC<CardImageProps> = ({ className, ...props }) => (
  <img className={clsx("w-full h-64 object-cover", className)} {...props} />
);

// Header
export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => (
  <div className={clsx("px-5 pt-2", className)} {...props}>
    {children}
  </div>
);

// Body
export const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => (
  <div className={clsx("px-5", className)} {...props}>
    {children}
  </div>
);

// Footer
export const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => (
  <div className={clsx("px-5 pb-5 pt-4", className)} {...props}>
    {children}
  </div>
);
