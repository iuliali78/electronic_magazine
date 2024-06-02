import Table from "components/ui/Table";
import { IResponseTableData } from "models/api";
import { useEffect, useState } from "react";
import { getTableData } from "services/journalService";

const Attendance = () => {
  const [data, setData] = useState<IResponseTableData | null>(null);

  useEffect(() => {
    getTableData().then((res) => {
      res.map((table) => (table.name === "attendance" ? setData(table) : null));
    });
  }, []);

  return (
    <div>
      {data && <Table columns={data.columns} rows={data.rows} canEdit />}
    </div>
  );
};

export default Attendance;
