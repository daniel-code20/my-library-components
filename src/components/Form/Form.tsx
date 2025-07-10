import React from "react";
import clsx from "clsx";
import { FormProps } from "./Form.types";
import { baseFormClass } from "./Form.styles";

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, ...props }, ref) => (
    <form ref={ref} className={clsx(baseFormClass, className)} {...props}>
      {children}
    </form>
  )
);

Form.displayName = "Form";

export default Form;