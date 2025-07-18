import React from "react";

export type PopoverPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "right-start"
  | "right"
  | "right-end"
  | "left-start"
  | "left"
  | "left-end";

export type PopoverColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type PopoverBackdrop = "transparent" | "dark" | "blur";

export interface PopoverProps {
  children: React.ReactNode;
  placement?: PopoverPlacement;
  color?: PopoverColor;
  backdrop?: PopoverBackdrop;
  isOpen?: boolean;
  onClose?: () => void;
  disableBackdropClick?: boolean;
}

export interface PopoverContextType {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  placement: string;
  color: string;
  backdrop: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  disableBackdropClick: boolean;
  onClose?: () => void;
}
