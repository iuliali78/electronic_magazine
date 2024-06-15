import React from "react";

export type Option = {
  id: number;
  value: string;
  text: string;
};

interface IProps {
  options: Option[];
  onChange: (selectValue: Option) => void;
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

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = options.find(option => option.value === event.target.value);
  
    if(selectOption) return onChange(selectOption);
  }
  
  return (
    <select
      className={classNames}
      onChange={(e) => handleOnChange(e)}
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
