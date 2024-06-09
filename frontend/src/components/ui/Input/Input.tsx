import { FormField } from "models/form";
import { useState } from "react";
import { CloseEyeIcon, EyeIcon } from "components/icons";

interface IProp {
  field: FormField;
  onChange: (obj: any) => void;
  value: any;
  classNames?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: React.FunctionComponent<IProp> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        className={props.classNames}
        type={
          props.field.inputType === "password" && !showPassword
            ? "password"
            : "text"
        }
        onChange={(event) => props.onChange(event.target.value)}
        value={props.value}
        placeholder={props.field.placeholder}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.field.inputType === "password" && (
        <div
          onClick={handleShowPassword}
          className="absolute top-[9px] right-[18px] cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 p-[2px] transition duration-300 ease-in-out"
        >
          {showPassword ? <EyeIcon /> : <CloseEyeIcon />}
        </div>
      )}
    </>
  );
};

export default Input;
