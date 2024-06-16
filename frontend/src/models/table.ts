import { User } from "redux/slices/userSlice";
import { ITableData } from "./api";

export type RowModel = Record<string, any>;
export type IColumn = BaseColumn | IColumnAction;

export interface BaseColumn {
  id?: number;
  field: string;
  type: string;
  headerName?: string;
}

export interface IColumnAction extends BaseColumn {
  getActions: (row: RowModel) => IAction[];
}

// Тип для отображения колонки с действиями
export interface IAction {
  icon: React.ReactNode;
  onClick: () => void;
}

export const isActionsColumn = (obj: IColumn): obj is IColumnAction => {
  return obj.type === "actions";
};

export type TableDataContext = { tableData: ITableData, user: User, isLoaded: boolean };
