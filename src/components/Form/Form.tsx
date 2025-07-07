import React from "react";
import clsx from "clsx";
import { FormProps } from "./Form.types";

const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form
      className={clsx("w-full space-y-6", className)}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;