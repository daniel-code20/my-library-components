import React, { createContext, useRef, useState } from "react";
import { PopoverProps, PopoverContextType } from "./Popover.types";

export const PopoverContext = createContext<PopoverContextType | null>(null);

export const Popover: React.FC<PopoverProps> = ({
  children,
  placement = "bottom",
  color = "default",
  backdrop = "transparent",
  isOpen,
  onClose,
  disableBackdropClick = false,
}) => {
  const [openState, setOpenState] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const open = isOpen ?? openState;

  const setOpen = (value: boolean) => {
    if (isOpen === undefined) {
      setOpenState(value);
    }
    if (!value) onClose?.();
  };

  return (
    <PopoverContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        placement,
        color,
        backdrop,
        onClose,
        disableBackdropClick,
      }}
    >
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};
