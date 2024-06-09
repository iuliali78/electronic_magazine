export type ResultFormObj = Record<string, any>;

export interface FormField {
  id: number;
  label: string;
  fieldType: string;
  inputType?: string;
  placeholder?: string;

  fieldComplextyType?: string;
}

export interface IRoleUser {
  name: string;
  id: number;
}