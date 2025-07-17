export type Colors = "default" | "primary" | "secondary" | "success" | "warning" | "danger"  ;
export type Size = "sm" | "md" | "lg";
export type Radius = "none" | "sm" | "md" | "lg" | "full";
export type Variant = "solid" | "outline" | "ghost" | "smooth" |"faint" ;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  size?: Size;
  radius?: Radius;
  variant?: Variant;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  onPress?: () => void;
  
}

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "leftIcon" | "rightIcon"> {
  icon: React.ReactNode;
  "aria-label": string; 
}

export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
  color?: Colors;
  size?: Size;
  radius?: Radius;
  variant?: Exclude<Variant, "ghost" | "smooth" | "faint">; // Excluye variantes no aplicables si lo deseas
  label?: React.ReactNode; // Etiqueta opcional para el switch
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


