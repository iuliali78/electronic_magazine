import Form from "components/ui/Form";
import { Option } from "components/ui/SingleSelect/SingleSelect";
import { presenceMarks } from "const";
import { FormField } from "models/form";
import { IPropsModalAttendance } from "models/journal";
import { RowModel } from "models/table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "redux/slices/modalSlice";
import { editRow, setIsLoaded } from "redux/slices/tableDataSlice";
import { RootState } from "redux/store";

const ModalAttendance: React.FunctionComponent<IPropsModalAttendance> = (
  props
) => {
  const { isLoaded } = useSelector((state: RootState) => state.tableDataSlice);

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
    {
      id: 1,
      label: "Отметка присутствия",
      fieldType: "presenceMarks",
      fieldComplextyType: "singleSelect",
      options: presenceMarks.options,
      placeholder: "Выберите отметку",
    },
  ];

  const handleCreateRow = (obj: RowModel) => {
    console.log(obj);
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
