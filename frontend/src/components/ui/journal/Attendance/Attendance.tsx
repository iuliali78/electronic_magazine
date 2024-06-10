import ModalAttendance from "components/modals/ModalAttendance";
import Table from "components/ui/Table";
import { IResponseTableData } from "models/api";
import { IPropsModalAttendance } from "models/journal";
import { RowModel } from "models/table";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showComponentInModal } from "redux/slices/modalSlice";
import { getTableData } from "services/journalService";
import { mapComponentInModal } from "utils/other";

const Attendance = () => {
  const [data, setData] = useState<IResponseTableData>();
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(false);
    getTableData().then((res) => {
      res.map((table) => table.name === "attendance" && setData(table));
      setIsLoaded(true);
    });
  }, []);

  const handleCreateRow = () => {
    const childrenModal = mapComponentInModal(ModalAttendance, {
      title: "Создание записи",
      props: { date: new Date().toUTCString() },
    });

    dispatch(showComponentInModal(childrenModal));
  };

  const handleEditRow = (row: RowModel) => {
    console.log(row);
    const childrenModal = mapComponentInModal(ModalAttendance, {
      title: row.FIO,
      props: {
        date: row.date,
        presenceMark: row.presenceMark,
      },
    });

    dispatch(showComponentInModal(childrenModal));
  };

  return (
    <div className="grow max-h-[600px] overflow-auto">
      <Table
        columns={data?.columns}
        rows={data?.rows}
        isLoaded={isLoaded}
        canEdit
        onEdit={(row) => handleEditRow(row)}
        canAdd
        onAdd={handleCreateRow}
      />
    </div>
  );
};

export default Attendance;
