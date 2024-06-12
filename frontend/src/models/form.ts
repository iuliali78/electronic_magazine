import { Option } from "components/ui/SingleSelect/SingleSelect";

export type ResultFormObj = Record<string, any>;

export interface FormField {
  id: number;
  label: string;
  fieldType: string;
  inputType?: string;
  placeholder?: string;

  fieldComplextyType?: string;

  options?: Option[];
}