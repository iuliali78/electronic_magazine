export type TRole = {
  id: number;
  name: string;
};

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: TRole[];
}

export interface ISignin {
  id: number;
  username: string;
  email: string;
  roles: string[];
  type: string;
  token: string;
}
