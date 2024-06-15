import { Option } from "components/ui/SingleSelect/SingleSelect";
import { RowModel } from "./table";

export interface IPropsModalAttendance {
    mode: "edit" | "create",
    rowInfo?: RowModel,
    dateValue: Option[] | string;
    presenceMarks?: string;
}

export interface IPropsModalGrade {
    mode: "edit" | "create",
    rowInfo?: RowModel,
    dateValue: Option[] | string;
    estimation?: string;
}