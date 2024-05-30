export type ResultFormObj = Record<string, any>;

export interface FormField {
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