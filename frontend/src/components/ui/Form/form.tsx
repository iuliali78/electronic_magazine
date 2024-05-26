import React, { useState } from "react";
import { FormField, ResultFormObj } from "models/form";
import { CloseEyeIcon, EyeIcon } from "components/icons";

interface IProps {
  fields: FormField[];
  onClick: (obj: ResultFormObj) => Promise<void>;
  buttonText?: string;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const [innerValue, setInnerValue] = useState<ResultFormObj>({});
  const [showPassword, setShowPassword] = useState(false);

  const setField = (field: string, value: unknown) => {
    setInnerValue((ps) => ({ ...ps, [field]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    props.onClick(innerValue);
  };

  return (
    <form className="flex flex-col justify-center">
      {props.fields.map((field) => (
        <div className="flex flex-col mb-[30px]">
          <label className="mb-[15px]">{field.label}</label>
          <div className="relative">
            <input
              className="rounded-[5px] p-[10px] outline-none w-full"
              type={field.inputType === "password" && !showPassword ? "password" : "text"}
              onChange={(event) =>
                setField(field.fieldType, event.target.value)
              }
              value={innerValue[field.fieldType]}
              placeholder={field.placeholder}
            />
            {field.fieldType === "password" && (
              <div
                onClick={handleShowPassword}
                className="absolute top-[9px] right-[18px] cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 p-[2px] transition duration-300 ease-in-out"
              >
                {showPassword ? <EyeIcon /> : <CloseEyeIcon />}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-[15px]">
        <button
          type="button"
          className="bg-[#93A8F4] px-[30px] py-[3px] rounded-[5px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer"
          onClick={handleClick}
        >
          {props.buttonText || "Подтвердить"}
        </button>
      </div>
    </form>
  );
};

export default Form;
