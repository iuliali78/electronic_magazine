import Table from "components/ui/Table";
import { TableDataContext } from "models/table";
import { useOutletContext } from "react-router-dom";

const GeneralStatistics = () => {
  const data = useOutletContext<TableDataContext>();

  return (
    <div className="grow max-h-[600px] overflow-auto">
       <Table
        columns={data.tableData?.columns}
        rows={data.tableData?.info[0].rows}
        isLoaded={data.isLoaded}
      />
    </div>
  );
};

export default GeneralStatistics;
