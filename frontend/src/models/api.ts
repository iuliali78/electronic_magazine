import { IColumn, RowModel } from "./table";

export interface ITableData {
    id: string;
    name: string;
    columns: IColumn[];
    info: {
        disciplineId: string,
        rows: RowModel[]
    }[]
}