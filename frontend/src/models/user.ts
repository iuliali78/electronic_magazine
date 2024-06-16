export type TRole = {
  id: number;
  name: string;
};

export interface IUser {
  id: number;
  name: string;
  surname: string,
  patronymic: string,
  email: string;
  roles: TRole[];
}

// Модель для студента
export interface IStudent extends IUser {
  group?: string;
}

export interface ISignin {
  id: number;
  username: string;
  email: string;
  roles: string[];
  group?: string,
  type: string;
  token: string;
}

export interface IPersonalInfo {
  id: number,
  header: string,
  type: "text" | "date",
  value: string | null,
}
