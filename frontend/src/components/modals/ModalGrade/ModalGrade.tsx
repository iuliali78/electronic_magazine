import Form from 'components/ui/Form';
import { Option } from 'components/ui/SingleSelect/SingleSelect';
import { estimationTypes, lessonTypes } from 'const';
import { FormField } from 'models/form';
import { IPropsModalGrade } from 'models/journal';
import { RowModel } from 'models/table';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setIsVisible } from 'redux/slices/modalSlice';
import { addDateRow, editRow, setIsLoaded } from 'redux/slices/tableDataSlice';

const ModalGrade:React.FunctionComponent<IPropsModalGrade> = (props) => {
    const dispatch = useDispatch();

    const gradeModalFields: FormField[] = [
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
        label: "Тип занятия",
        fieldType: "lessonType",
        fieldComplextyType: "singleSelect",
        options: lessonTypes.options,
        placeholder: "Выберите тип занятия",
      },
      ...(props.mode === "edit"
        ? [
            {
              id: 2,
              label: "Оценка",
              fieldType: "estimation",
              fieldComplextyType: "singleSelect",
              options: estimationTypes.options,
              placeholder: "Выберите оценку",
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
        [obj.date.value]: obj.estimation.text,
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
          fields={gradeModalFields}
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
}

export default ModalGrade