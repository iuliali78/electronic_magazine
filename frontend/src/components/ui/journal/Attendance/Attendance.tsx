import ModalAttendance from "components/modals/ModalAttendance";
import Table from "components/ui/Table";
import { RowModel, TableDataContext } from "models/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { showComponentInModal } from "redux/slices/modalSlice";
import { setAttendanceTotal } from "redux/slices/tableDataSlice";
import { mapComponentInModal } from "utils/other";

const Attendance = () => {
  const dispatch = useDispatch();

  const data = useOutletContext<TableDataContext>();

  const handleCreateRow = () => {
    const childrenModal = mapComponentInModal(ModalAttendance, {
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

    const childrenModal = mapComponentInModal(ModalAttendance, {
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
    if (data.tableData) {
      const attendanceRows = data.tableData.info[0].rows;

      attendanceRows.slice(1, attendanceRows.length).map((row) => {
        const { id, numberRecord, FIO, ...restProperties } = row;
        let visits = 0;
        // Убираем пропуски по болезни, потому что - это уважительная причина
        const allVisits = Object.keys(restProperties).filter(
          (key) => restProperties[key] !== "Б"
        );
        // Считаем кол-во посещений
        allVisits.map(
          (key) => restProperties[key] === "П" && (visits = visits + 1)
        );
        // Добавляем в стор вычисленное значение посещаемости у конкретного студента (значение в процентах)
        dispatch(
          setAttendanceTotal({
            numberRecord: row.numberRecord,
            result: `${parseFloat((visits / allVisits.length).toFixed(2)) * 100}`,
          })
        );
      });
    }
  }, [data.tableData]);

  return (
    <div className="grow max-h-[600px] overflow-auto">
      <Table
        user={data.user}
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

export default Attendance;
