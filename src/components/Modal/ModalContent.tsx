import clsx from "clsx";
import React from "react";

interface ModalContentProps {
  children: React.ReactNode;
  onClose?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}


const sizeMap: Record<NonNullable<ModalContentProps["size"]>, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};


export const ModalContent: React.FC<ModalContentProps> = ({ children, onClose, size = "md" }) => {
  return (
    <div
      className={clsx(
        "relative bg-white dark:bg-zinc-900 rounded-xl shadow-xl w-full max-h-[90vh] flex flex-col overflow-hidden",
        sizeMap[size]
      )}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          aria-label="Cerrar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <div className="flex flex-col h-full p-6 overflow-hidden">{children}</div>
    </div>
  );
};
