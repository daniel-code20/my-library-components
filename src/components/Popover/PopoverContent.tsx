import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { PopoverContext } from "./Popover";
import { colorStyles, backdropStyles } from "./Popover.styles";

export const PopoverContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverContent must be used within a Popover");

  const {
    open,
    setOpen,
    placement,
    color,
    backdrop,
    triggerRef,
    contentRef,
    disableBackdropClick,
  } = context;

  const [visible, setVisible] = useState(open);

  // Sincroniza estado local con el `open` del contexto
  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 200); // 200ms = duración animación
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Cierre por click fuera o ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !contentRef.current?.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        if (!disableBackdropClick) setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpen, disableBackdropClick]);

  if (!visible) return null;

  const getPlacementClasses = () => {
    switch (placement) {
      case "top": return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "top-start": return "bottom-full left-0 mb-2";
      case "top-end": return "bottom-full right-0 mb-2";
      case "bottom": return "top-full left-1/2 -translate-x-1/2 mt-2";
      case "bottom-start": return "top-full left-0 mt-2";
      case "bottom-end": return "top-full right-0 mt-2";
      case "right": return "left-full top-1/2 -translate-y-1/2 ml-2";
      case "right-start": return "left-full top-0 ml-2";
      case "right-end": return "left-full bottom-0 ml-2";
      case "left": return "right-full top-1/2 -translate-y-1/2 mr-2";
      case "left-start": return "right-full top-0 mr-2";
      case "left-end": return "right-full bottom-0 mr-2";
      default: return "";
    }
  };

  return (
    <>
      {backdrop !== "transparent"  && (
        <div
          className={clsx(
            "fixed inset-0 z-40 transition-opacity duration-200",
            backdropStyles[backdrop],
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => !disableBackdropClick && setOpen(false)}
        />
      )}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={clsx(
          "absolute z-50 rounded-xl shadow-lg transition-all duration-200 ease-out",
          colorStyles[color],
          getPlacementClasses(),
          "w-auto min-w-[180px] max-w-[90vw] max-h-[80vh] overflow-auto flex justify-center",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="text-left">{children}</div>
      </div>
    </>
  );
};
