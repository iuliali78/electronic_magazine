import Table from "components/ui/Table";
import { RowModel, TableDataContext } from "models/table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { RootState } from "redux/store";

const GeneralStatistics = () => {
const [rows, setRows] = useState<RowModel[]>([]);

  const data = useOutletContext<TableDataContext>();
  const { attendanceTotal, gradeTotal } = useSelector((state: RootState) => state.tableDataSlice);

  useEffect(() => {
    if(data.tableData) {
      const updateingRows = data.tableData.info[0].rows.map(row => {
        let result = "";
        // Подсчет итоговой оценки
        if(Number(attendanceTotal[row.numberRecord]) >= 70 && Number(gradeTotal[row.numberRecord]) >= 4.6) result = "отлично/зачет";
        else if(Number(gradeTotal[row.numberRecord]) >= 3.6) result = "хорошо/зачет";
        else result = "неудовлетворительно/незачет";

        return {
          ...row,
          attendance: attendanceTotal[row.numberRecord] && `${attendanceTotal[row.numberRecord]}%`,
          grade: gradeTotal[row.numberRecord],
          result
        }
      })
      // Обновляем строки для отображения
      setRows(updateingRows);
    }
  }, [data.tableData])

  return (
    <div className="grow max-h-[600px] overflow-auto">
       <Table
        columns={data.tableData?.columns}
        rows={rows}
        isLoaded={data.isLoaded}
      />
    </div>
  );
};

export default GeneralStatistics;
