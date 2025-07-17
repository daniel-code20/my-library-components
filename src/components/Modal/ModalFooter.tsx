import React from "react";
import { SectionProps } from "./Modal.types";
import clsx from "clsx";

export const ModalFooter: React.FC<SectionProps> = ({ children, className }) => (
  <div className={clsx("pt-4 flex justify-end gap-3", className)}>
    {children}
  </div>
);
