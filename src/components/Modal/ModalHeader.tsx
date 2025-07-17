import React from "react";
import { SectionProps } from "./Modal.types";
import clsx from "clsx";

export const ModalHeader: React.FC<SectionProps> = ({ children, className }) => (
  <div className={clsx("text-xl font-semibold mb-4 text-gray-900 dark:text-white", className)}>
    {children}
  </div>
);
