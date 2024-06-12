import React, { useState } from "react";

export type Option = {
  id: number;
  value: string;
  text: string;
};

interface IProps {
  options: Option[];
  onChange: (selectValue: string) => void;
  classNames?: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const SingleSelect: React.FunctionComponent<IProps> = ({
  options,
  onChange,
  classNames,
  placeholder,
  onFocus,
  onBlur,
}) => {
  
  return (
    <select
      className={classNames}
      onChange={(e) => onChange(options.find(option => option.value === e.target.value)?.text!)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {placeholder && <option value="" disabled selected hidden>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.id} className="py-[10px]" value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default SingleSelect;
