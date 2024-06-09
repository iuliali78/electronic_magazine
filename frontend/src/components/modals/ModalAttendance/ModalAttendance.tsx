import Form from "components/ui/Form";
import { FormField } from "models/form";
import { IPropsModalAttendance } from "models/journal";
import React from "react";

const attendanceModalFields: FormField[] = [
  {
    id: 0,
    label: "Дата",
    fieldType: "date",
    placeholder: "Выберите дату",
  },
  {
    id: 1,
    label: "Отметка присутствия",
    fieldType: "presenceMark",
    placeholder: "Выберите отметку",
  },
];

const ModalAttendance: React.FunctionComponent<IPropsModalAttendance> = () => {
  return (
    <div className="px-[24px]">
      <Form
        fields={attendanceModalFields}
        onClick={(obj) => new Promise((res) => console.log(obj))}
        buttonText="Сохранить"
      />
    </div>
  );
};

export default ModalAttendance;
