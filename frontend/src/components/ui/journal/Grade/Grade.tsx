import Table from "components/ui/Table";
import { IColumn, RowModel } from "models/table";
import React from "react";

const tableData: { rows: RowModel[]; columns: IColumn[] } = {
  columns: [
    {
      id: 0,
      field: "grade",
      headerName: "Успеваемость",
    },
  ],

  rows: [
    {
      id: 0,
      grade: "Значение успеваемости",
    },
  ],
};

const Grade = () => {
  return (
    <div>
      <Table columns={tableData.columns} rows={tableData.rows} />
    </div>
  );
};

export default Grade;
