import { IColumn, RowModel } from "models/table";
import React from "react";
import { createDynamicStyles } from "utils/other";

interface IProps {
  columns: IColumn[];
  rows: RowModel[];
}

const Table: React.FunctionComponent<IProps> = ({ columns, rows }) => {
  return (
    <table className="w-full border-separate border-spacing-0">
      <thead className="bg-[#E1EDFF]">
        {columns.map((column) => (
          <th
            key={column.id}
            className="border-t-[1px] border-l-[1px] border-[#CDE1FF] border-solid first:rounded-tl-[16px] last:rounded-tr-[16px] last:border-r-[1px]"
          >
            {column.headerName}
          </th>
        ))}
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td
                key={column.id}
                className={createDynamicStyles(
                  index === rows.length - 1,
                  "text-center border-t-[1px] border-l-[1px] border-solid border-[#CDE1FF] bg-[#FFFFFF] py-[5px] px-[15px] last:border-r-[1px]",
                  "first:rounded-bl-[16px] last:rounded-br-[16px] border-b-[1px]"
                )}
              >
                {row[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
