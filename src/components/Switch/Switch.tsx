import React from "react";
import type { SwitchProps } from "./Switch.types";
import {
  switchWrapper,
  switchBase,
  switchCheckedBg,
  switchUncheckedBg,
  knobBase,
  knobChecked,
  knobUnchecked,
} from "./Switch.styles";

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <div className={switchWrapper} onClick={onChange}>
        <div
          className={`${switchBase} ${checked ? switchCheckedBg : switchUncheckedBg}`}
        />
        <div
          className={`${knobBase} ${checked ? knobChecked : knobUnchecked}`}
        />
      </div>
    </label>
  );
};

