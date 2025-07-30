import { SkeletonProps } from "./Skeleton.types";
import styles from "./Skeleton.module.css";

export const baseStyles =
  styles.skeleton;

export const variantStyles = {
  circle: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none",
};

export function getSizeStyles(props: SkeletonProps) {
  if (props.size) {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
    };
  }
  return {
    width: props.width || "100%",
    height: props.height || "1rem",
  };
}
