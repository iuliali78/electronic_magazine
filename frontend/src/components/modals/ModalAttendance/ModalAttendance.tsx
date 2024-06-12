import Form from "components/ui/Form";
import { Option } from "components/ui/SingleSelect/SingleSelect";
import { presenceMarks } from "const";
import { FormField } from "models/form";
import { IPropsModalAttendance } from "models/journal";
import React from "react";

const ModalAttendance: React.FunctionComponent<IPropsModalAttendance> = (props) => {
  const attendanceModalFields: FormField[] = [
    {
      id: 0,
      label: "Дата",
      fieldType: "date",
      fieldComplextyType: props.mode === "edit" ? "singleSelect" : "dateColumn",
      ...(props.mode === "edit" && {options: props.dateValue as Option[]}),
      placeholder: "Выберите дату",
    },
    {
      id: 1,
      label: "Отметка присутствия",
      fieldType: "presenceMarks",
      fieldComplextyType: "singleSelect",
      options: presenceMarks.options,
      placeholder: "Выберите отметку",
    },
  ];

  return (
    <div className="px-[24px]">
      <Form
        fields={attendanceModalFields}
        onClick={(obj) => new Promise((res) => console.log(obj))}
        data={{presenceMark: props.presenceMark, ...(props.mode === "create" && {date: props.dateValue})}}
        buttonText="Сохранить"
      />
    </div>
  );
};

export default ModalAttendance;
