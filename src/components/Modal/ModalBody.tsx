import React from "react";
import { SectionProps } from "./Modal.types";
import clsx from "clsx";

export const ModalBody: React.FC<SectionProps> = ({ children, className }) => (
  <div className={clsx("flex-1 overflow-y-auto pr-1 text-gray-700 dark:text-gray-300 space-y-4", className)}>
    {children}
  </div>
);
