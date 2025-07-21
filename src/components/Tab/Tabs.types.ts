import React from 'react';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type TabColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TabVariant = 'light' | 'underline' | 'bordered' | 'solid' | 'faded' | 'shadow';

export interface TabItem {
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  size?: TabSize;
  radius?: TabRadius;
  color?: TabColor;
  variant?: TabVariant;
  className?: string;
}

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  selectedIndex: number;
  className?: string;
}
