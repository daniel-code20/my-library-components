import React, { useEffect, useRef } from "react";
import { BackgroundEffect, ModalProps, ModalSize } from "./Modal.types";

const sizeClasses: Record<ModalSize, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

const backgroundClasses: Record<BackgroundEffect, string> = {
  dark: "bg-black/40",
  blur: "bg-black/20 backdrop-blur-sm",
  transparent: "bg-transparent",
};


export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onOpenChange,
  children,
  size = "md",
  backgroundEffect = "dark",
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClose = () => onOpenChange(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto p-4 ${backgroundClasses[backgroundEffect]}`}
    >
      {children(handleClose, sizeClasses[size])}
    </div>
  );
};
