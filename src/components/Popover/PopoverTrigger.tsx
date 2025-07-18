import React, { useContext } from "react";
import { PopoverContext } from "./Popover";

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverTrigger must be used within a Popover");

  const { open, setOpen, triggerRef } = context;

  return (
    <div
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
};
