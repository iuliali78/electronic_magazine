import React, { useState } from "react";
import { FormField, ResultFormObj } from "models/form";
import Multiselect from "multiselect-react-dropdown";
import { userTypes } from "const";
import Loader from "components/loader/Loader";
import { createDynamicStyles } from "utils/other";
import Input from "../Input";

interface IProps {
  fields: FormField[];
  onClick: (obj: ResultFormObj) => Promise<void>;
  buttonText?: string;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const [innerValue, setInnerValue] = useState<ResultFormObj>({});
  const [activeField, setActiveField] = useState<number | null>(null);

  const [isLoaded, setIsLoaded] = useState(true);

  const setField = (field: string, value: unknown) => {
    setInnerValue((ps) => ({ ...ps, [field]: value }));
  };

  const handleClick = async () => {
    setIsLoaded(false);

    await props.onClick(innerValue);

    setIsLoaded(true);
  };

  const handleSelectField = (id: number | null) => {
    setActiveField(id);
  };

  return (
    <div className="max-h-[460px] overflow-y-auto overflow-x-hidden">
      <form className="flex flex-col justify-center">
        {props.fields.map((field) => (
          <div key={field.id} className="flex flex-col mb-[30px]">
            <label className="mb-[15px]">{field.label}</label>
            <div className="relative">
              {!field.fieldComplextyType ? (
                // Отдельный компонент инпута
                  <Input
                    classNames={createDynamicStyles(
                      field.id === activeField,
                      "rounded-[5px] p-[10px] outline-none w-full border-[1px] border-solid",
                      "border-[#93A8F4]"
                    )}
                    onChange={(value) => setField(field.fieldType, value)}
                    field={field}
                    value={innerValue[field.fieldType]}
                    onFocus={() => handleSelectField(field.id)}
                    onBlur={() => handleSelectField(null)}
                  />
              ) : (
                <div
                  className={createDynamicStyles(
                    activeField === field.id,
                    "p-[10px] rounded-[5px] outline-none bg-[#FFFFFF] border-[1px] border-solid cursor-pointer",
                    "border-[#93A8F4]"
                  )}
                  onFocus={() => handleSelectField(field.id)}
                  onBlur={() => handleSelectField(null)}
                >
                  <Multiselect
                    options={userTypes.options}
                    displayValue="name"
                    placeholder={field.placeholder}
                    onSelect={(list: string[]) =>
                      setField(field.fieldType, list)
                    }
                    className="multiselect"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center mb-[15px]">
          <button
            type="button"
            className="bg-[#ACD0FF] px-[30px] py-[3px] min-w-[150px] min-h-[33px] rounded-[5px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer"
            onClick={handleClick}
          >
            {isLoaded ? props.buttonText || "Подтвердить" : <Loader />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
