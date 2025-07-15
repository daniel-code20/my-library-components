export interface SelectItem {
  key: string | number;
  label: string;
}

export interface CustomSelectProps {
  label?: string;
  placeholder?: string;
  items: SelectItem[];
  className?: string;
  onChange?: (value: string | number) => void;
}
