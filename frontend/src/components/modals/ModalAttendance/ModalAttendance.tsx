import Form from "components/ui/Form";
import { Option } from "components/ui/SingleSelect/SingleSelect";
import { presenceMarks } from "const";
import { FormField } from "models/form";
import { IPropsModalAttendance } from "models/journal";
import { RowModel } from "models/table";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsVisible } from "redux/slices/modalSlice";
import { addDateRow, editRow, setIsLoaded } from "redux/slices/tableDataSlice";

const ModalAttendance: React.FunctionComponent<IPropsModalAttendance> = (
  props
) => {
  const dispatch = useDispatch();

  const attendanceModalFields: FormField[] = [
    {
      id: 0,
      label: "Дата",
      fieldType: "date",
      fieldComplextyType: props.mode === "edit" ? "singleSelect" : "dateColumn",
      ...(props.mode === "edit" && { options: props.dateValue as Option[] }),
      placeholder: "Выберите дату",
    },
    ...(props.mode === "edit"
      ? [
          {
            id: 1,
            label: "Отметка присутствия",
            fieldType: "presenceMarks",
            fieldComplextyType: "singleSelect",
            options: presenceMarks.options,
            placeholder: "Выберите отметку",
          },
        ]
      : []),
  ];

  const handleCreateRow = (obj: RowModel) => {
    dispatch(setIsLoaded(false));
    // Добавляем новую запись в стор
    dispatch(addDateRow(obj));
    // Закрываем модальное окно
    dispatch(setIsVisible(false));

    setTimeout(() => {
      dispatch(setIsLoaded(true));
    }, 1000);
  };

  const handleEditRow = (obj: RowModel) => {
    let newObj = {};
    // Формируем объект с новыми данными
    newObj = {
      ...props.rowInfo,
      [obj.date.value]: obj.presenceMarks.text,
    };

    dispatch(setIsLoaded(false));
    // Обновляем данные в сторе
    dispatch(editRow(newObj));
    // Закрываем модальное окно
    dispatch(setIsVisible(false));

    setTimeout(() => {
      dispatch(setIsLoaded(true));
    }, 1000);
  };

  return (
    <div className="px-[24px]">
      <Form
        fields={attendanceModalFields}
        onClick={(obj) =>
          new Promise((res) =>
            props.mode === "create" ? handleCreateRow(obj) : handleEditRow(obj)
          )
        }
        data={{ ...(props.mode === "create" && { date: props.dateValue }) }}
        buttonText="Сохранить"
      />
    </div>
  );
};

export default ModalAttendance;
