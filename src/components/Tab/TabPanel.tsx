import React from 'react';
import { TabPanelProps } from './Tabs.types';
import clsx from 'clsx';

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  selectedIndex,
  className,
}) => {
  if (index !== selectedIndex) return null;

  return (
     <div
      className={clsx(
        "mt-4 w-full max-w-3xl rounded-xl bg-white p-4 shadow-lg border border-gray-200",
        className
      )}
      role="tabpanel"
    >
      {children}
    </div>
  );
};
