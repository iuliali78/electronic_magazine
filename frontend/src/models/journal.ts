import { Option } from "components/ui/SingleSelect/SingleSelect";

export interface IPropsModalAttendance {
    mode: "edit" | "create",
    dateValue: Option[] | string;
    presenceMark?: string;
}