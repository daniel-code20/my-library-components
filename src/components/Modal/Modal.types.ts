import { ReactNode } from "react";

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl";
export type BackgroundEffect = "dark" | "blur" | "transparent";

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  size?: ModalSize;
   backgroundEffect?: BackgroundEffect;
  children: (onClose: () => void, sizeClass: string) => React.ReactNode;
}


export interface ModalContentProps {
  children: (onClose: () => void) => ReactNode;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
}


