import Table from "components/ui/Table";
import { IResponseTableData } from "models/api";
import { useEffect, useState } from "react";
import { getTableData } from "services/journalService";

const Attendance = () => {
  const [data, setData] = useState<IResponseTableData>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    getTableData().then((res) => {
      res.map((table) => table.name === "attendance" && setData(table));
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="grow">
      <Table
        columns={data?.columns}
        rows={data?.rows}
        isLoaded={isLoaded}
        canEdit
      />
    </div>
  );
};

export default Attendance;
