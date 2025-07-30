import React from "react";
import clsx from "clsx";
import { AvatarProps } from "./Avatar.types";
import {
  sizeMap,
  radiusMap,
  bgColorMap,
  textColorMap,
  borderColorMap,
} from "./Avatar.styles";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  radius = "full",
  variant = "default",
  disabled = false,
  color = "default",
  borderColor = "default",
  fallback,
  className,
  ...props
}) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(true);

  const sizeClass = sizeMap[size];
  const radiusClass = radiusMap[radius];
  const bgColorClass = bgColorMap[color];
  const textColorClass = textColorMap[color];
  const borderClass =
    variant === "bordered" ? borderColorMap[borderColor] : "border-transparent";

  const getInitials = (name: string): string => {
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const renderContent = () => {
    if (fallback) return fallback;
    if (alt) return getInitials(alt);
    return "?";
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center font-medium overflow-hidden",
        sizeClass,
        radiusClass,
        bgColorClass,
        textColorClass,
        variant === "bordered" && "border-2",
        borderClass,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {src && isImageLoaded ? (
        <img
          src={src}
          alt={alt}
          className={clsx("object-cover w-full h-full", radiusClass)}
          onError={() => setIsImageLoaded(false)}
        />
      ) : (
        <span className="select-none">{renderContent()}</span>
      )}
    </div>
  );
};
