import { PenIcon } from "components/icons";
import { IAction, IColumn, RowModel, isActionsColumn } from "models/table";
import React, { useEffect, useState } from "react";
import { createDynamicStyles } from "utils/other";

interface IProps {
  columns: IColumn[];
  rows: RowModel[];

  // Условия для отображения соответсвующих иконок в столбце действий
  canAdd?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}

const Table: React.FunctionComponent<IProps> = (props) => {
  const [tableColumns, setTableColumns] = useState<IColumn[]>(props.columns);

  useEffect(() => {
    const newCol: IColumn[] = tableColumns.filter(
      (col) => col.type !== "actions"
    );

    // Обработка сценария, если в таблице есть колонка с дейсвтиями;
    if (props.canEdit || props.canDelete) {
      newCol.unshift({
        field: "actions",
        type: "actions",
        getActions: (row: RowModel) => {
          const actions: IAction[] = [];

          if (props.canEdit) {
            actions.push({
              icon: <PenIcon />,
              onClick: () => console.log(row),
            });
          }

          return actions;
        },
      });
    }

    setTableColumns(newCol);
  }, [props.canEdit, props.canDelete]);

  React.useEffect(() => {
    console.log(
      isActionsColumn(tableColumns[0]) && tableColumns[0].getActions({})
    );
  }, [tableColumns]);

  //React.useEffect(() => {console.log(props.canEdit, props.canDelete)}, [props.canEdit, props.canDelete])

  return (
    <table className="w-full border-separate border-spacing-0">
      <thead className="bg-[#E1EDFF]">
        {tableColumns.map((column) => (
          <th
            key={column.id}
            className="border-t-[1px] border-l-[1px] border-[#CDE1FF] border-solid first:rounded-tl-[16px] last:rounded-tr-[16px] last:border-r-[1px]"
          >
            {column.headerName}
          </th>
        ))}
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={row.id}>
            {tableColumns.map((column) => (
              <td
                key={column.id || "id_actions"}
                className={createDynamicStyles(
                  index === props.rows.length - 1,
                  "text-center border-t-[1px] border-l-[1px] border-solid border-[#CDE1FF] bg-[#FFFFFF] py-[5px] px-[15px] last:border-r-[1px]",
                  "first:rounded-bl-[16px] last:rounded-br-[16px] border-b-[1px]"
                )}
              >
                <span className="inline-flex">
                  {row[column.field] ??
                    (isActionsColumn(column) &&
                      column.getActions(row).map((action, index) => (
                        <span
                          key={index}
                          onClick={action.onClick}
                          className="p-[7px] cursor-pointer rounded-[50px] hover:bg-[#000] hover:bg-opacity-10 transition duration-300 ease-in-out"
                        >
                          {action.icon}
                        </span>
                      )))}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
