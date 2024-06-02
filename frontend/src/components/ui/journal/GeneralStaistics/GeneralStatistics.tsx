import Table from "components/ui/Table";
import { IColumn, RowModel } from "models/table";
import React from "react";

const tableData: { rows: RowModel[]; columns: IColumn[] } = {
  columns: [
    {
      id: 0,
      field: "general",
      headerName: "Статистика",
      type: "string"
    },
  ],

  rows: [
    {
      id: 0,
      general: "значение колонки",
    },
  ],
};

const GeneralStatistics = () => {
  return (
    <div>
      <Table columns={tableData.columns} rows={tableData.rows} />
    </div>
  );
};

export default GeneralStatistics;
