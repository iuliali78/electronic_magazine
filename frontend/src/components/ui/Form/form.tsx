import React, { useState } from "react";
import { FormField, ResultFormObj } from "models/form";
import Loader from "components/loader/Loader";
import { createDynamicStyles } from "utils/other";
import Input from "../Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "components/icons";
import SingleSelect from "../SingleSelect";

interface IProps {
  fields: FormField[];
  onClick: (obj: ResultFormObj) => Promise<void>;
  buttonText?: string;
  data?: ResultFormObj;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const [innerValue, setInnerValue] = useState<ResultFormObj>(props.data || {});
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
              ) : field.fieldComplextyType === "singleSelect" ? (
                <SingleSelect
                  classNames={createDynamicStyles(
                    field.id === activeField,
                    "rounded-[5px] p-[10px] outline-none w-full border-[1px] border-solid cursor-pointer",
                    "border-[#93A8F4]"
                  )}
                  options={field.options!}
                  placeholder={field.placeholder}
                  onChange={(text: string) =>
                    setField(field.fieldType, text)
                  }
                  onFocus={() => handleSelectField(field.id)}
                  onBlur={() => handleSelectField(null)}
                />
              ) : (
                <div className={"relative"}>
                  <DatePicker
                    selected={innerValue[field.fieldType]}
                    dateFormat={"YYYY-MM-dd"}
                    onChange={(date) => setField(field.fieldType, date)}
                    onFocus={() => handleSelectField(field.id)}
                    onBlur={() => handleSelectField(null)}
                    wrapperClassName="w-full"
                    customInput={
                      <Input
                        classNames={createDynamicStyles(
                          activeField === field.id,
                          "w-full outline-none p-[10px] rounded-[5px] border-[1px] border-solid bg-[#FFFFFF]",
                          "border-[#93A8F4]"
                        )}
                        field={field}
                        value={innerValue[field.fieldType]}
                        onChange={(obj) => console.log(obj)}
                      />
                    }
                  />
                  <span className="absolute top-[50%] right-[12px] translate-y-[-50%]">
                    <CalendarIcon />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center mb-[15px]">
          <button
            type="button"
            className="bg-[#ACD0FF] px-[30px] py-[3px] min-w-[150px] min-h-[33px] rounded-[10px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer"
            onClick={handleClick}
          >
            {isLoaded ? (
              props.buttonText || "Подтвердить"
            ) : (
              <Loader variants="primary" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
