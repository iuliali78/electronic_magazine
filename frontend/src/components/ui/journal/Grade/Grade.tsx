import { ModalGrade } from "components/modals";
import Table from "components/ui/Table";
import { RowModel, TableDataContext } from "models/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { showComponentInModal } from "redux/slices/modalSlice";
import { setGradeTotal } from "redux/slices/tableDataSlice";
import { mapComponentInModal } from "utils/other";

const Grade = () => {
  const dispatch = useDispatch();

  const data = useOutletContext<TableDataContext>();

  const handleCreateRow = () => {
    const childrenModal = mapComponentInModal(ModalGrade, {
      title: "Создание записи",
      props: { mode: "create", dateValue: new Date().toUTCString() },
    });

    dispatch(showComponentInModal(childrenModal));
  };


  const handleEditRow = (row: RowModel) => {
    const dateRow = data.tableData?.info[0].rows[0];

    // Формирование объекта с датами из таблицы (строки с датами)
    const dateTypes = {
      options: Object.keys(dateRow)
        .filter((key) => key !== "id" && key !== "isAdditionalRow")
        .map((key, index) => ({
          id: index,
          value: key,
          text: dateRow[key],
        })),
    };

    const childrenModal = mapComponentInModal(ModalGrade, {
      title: row.FIO,
      props: {
        mode: "edit",
        rowInfo: row,
        dateValue: dateTypes.options,
      },
    });

    dispatch(showComponentInModal(childrenModal));
  };

  useEffect(() => {
    if(data.tableData) {
      const gradeRows = data.tableData.info[0].rows;

      gradeRows.slice(2, gradeRows.length).map((row) => {
        const { id, numberRecord, FIO, ...restProperties } = row;
        let totalNumber = 0;
        // Убираем дни, в которые человек отсутствовал
        const quantityEstimations = Object.keys(restProperties).filter((key) => restProperties[key] !== "-")
        // Считаем среднее арифметическое значение оценок
        quantityEstimations.map((key) => totalNumber = totalNumber + Number(restProperties[key])); 
        // Добавляем в стор вычисленное значение посещаемости у конкретного студента (значение в процентах)
        dispatch(setGradeTotal({numberRecord: row.numberRecord, result: `${(totalNumber / quantityEstimations.length).toFixed(1)}`}))
      });
    }
  }, [data.tableData]);

  return (
    <div className="grow max-h-[600px] overflow-auto">
       <Table
        columns={data.tableData?.columns}
        rows={data.tableData?.info[0].rows}
        isLoaded={data.isLoaded}
        canEdit
        onEdit={(row) => handleEditRow(row)}
        canAdd
        onAdd={handleCreateRow}
      />
    </div>
  );
};

export default Grade;
