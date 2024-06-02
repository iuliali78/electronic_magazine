import Table from "components/ui/Table";
import { IColumn, RowModel } from "models/table";
import React from "react";

const tableData: { rows: RowModel[]; columns: IColumn[] } = {
  columns: [
    {
      id: 0,
      field: "fio",
      headerName: "ФИО",
    },
    {
      id: 1,
      field: "test",
      headerName: "Тест",
    },
  ],

  rows: [
    {
      id: 0,
      fio: "Александров Артём Евгеньевич",
    },
    {
      id: 1,
      test: "Тестируем",
    },
  ],
};

const Attendance = () => {
  return (
    <div>
      <Table columns={tableData.columns} rows={tableData.rows} />
    </div>
  );
};

export default Attendance;
