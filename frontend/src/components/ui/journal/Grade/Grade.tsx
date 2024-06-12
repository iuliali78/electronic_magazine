import Table from "components/ui/Table";
import { TableDataContext } from "models/table";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { mapComponentInModal } from "utils/other";

const Grade = () => {
  const dispatch = useDispatch();

  const data = useOutletContext<TableDataContext>();

  // const handleCreateRow = () => {
  //   const childrenModal = mapComponentInModal(, {
  //     title: "Создание записи",
  //     props: { date: new Date().toUTCString() },
  //   });

  //   dispatch(showComponentInModal(childrenModal));
  // };

  // const handleEditRow = (row: RowModel) => {
  //   console.log(row);
  //   const childrenModal = mapComponentInModal(, {
  //     title: row.FIO,
  //     props: {
  //       date: row.date,
  //       presenceMark: row.presenceMark,
  //     },
  //   });

  //   dispatch(showComponentInModal(childrenModal));
  // };

  return (
    <div className="grow max-h-[600px] overflow-auto">
       <Table
        columns={data.tableData?.columns}
        rows={data.tableData?.info[0].rows}
        isLoaded={data.isLoaded}
        canEdit
        //onEdit={(row) => handleEditRow(row)}
        canAdd
        //onAdd={handleCreateRow}
      />
    </div>
  );
};

export default Grade;
