import ModalAttendance from "components/modals/ModalAttendance";
import { Option } from "components/ui/SingleSelect/SingleSelect";
import Table from "components/ui/Table";
import { RowModel, TableDataContext } from "models/table";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { showComponentInModal } from "redux/slices/modalSlice";
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
        .filter((key) => key !== "id" && key !== "isDateRow")
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
        dateValue: dateTypes.options,
        presenceMark: row.presenceMark,
      },
    });

    dispatch(showComponentInModal(childrenModal));
  };

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

export default Attendance;
