import React, { useState } from "react";
import { FormField, ResultFormObj } from "models/form";
import { CloseEyeIcon, EyeIcon } from "components/icons";
import Multiselect from "multiselect-react-dropdown";
import { userTypes } from "const";
import Loader from "components/loader/loader";

interface IProps {
  fields: FormField[];
  onClick: (obj: ResultFormObj) => Promise<void>;
  buttonText?: string;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const [innerValue, setInnerValue] = useState<ResultFormObj>({});
  const [showPassword, setShowPassword] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  const setField = (field: string, value: unknown) => {
    setInnerValue((ps) => ({ ...ps, [field]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = async () => {
    setIsLoaded(false);

    await props.onClick(innerValue);

    setIsLoaded(true);
  };

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <form className="flex flex-col justify-center">
        {props.fields.map((field) => (
          <div className="flex flex-col mb-[30px]">
            <label className="mb-[15px]">{field.label}</label>
            <div className="relative">
              {!field.fieldComplextyType ? (
                <input
                  className="rounded-[5px] p-[10px] outline-none w-full"
                  type={
                    field.inputType === "password" && !showPassword
                      ? "password"
                      : "text"
                  }
                  onChange={(event) =>
                    setField(field.fieldType, event.target.value)
                  }
                  value={innerValue[field.fieldType]}
                  placeholder={field.placeholder}
                />
              ) : (
                <Multiselect
                  options={userTypes.options}
                  displayValue="name"
                  placeholder={field.placeholder}
                  onSelect={(list: string[]) => setField(field.fieldType, list)}
                  className="multiselect"
                />
              )}
              {field.fieldType === "password" && (
                <div
                  onClick={handleShowPassword}
                  className="absolute top-[9px] right-[18px] cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 p-[2px] transition duration-300 ease-in-out">
                  {showPassword ? <EyeIcon /> : <CloseEyeIcon />}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center mb-[15px]">
          <button
            type="button"
            className="bg-[#93A8F4] px-[30px] py-[3px] min-w-[150px] min-h-[33px] rounded-[5px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer"
            onClick={handleClick}>
            {isLoaded ? props.buttonText || "Подтвердить" : <Loader />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
