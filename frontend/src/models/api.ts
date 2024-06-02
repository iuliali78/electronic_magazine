import { IColumn, RowModel } from "./table";

export interface IResponseTableData {
    id: string;
    name: string;
    columns: IColumn[];
    rows: RowModel[]
}