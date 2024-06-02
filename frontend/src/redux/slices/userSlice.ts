import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string | null;
  email: string;
  roles: string;
  isAuth: boolean;
};

export interface userState {
  user: User;
}

const initialState: userState = {
  user: {
    id: 0,
    username: localStorage.getItem('FIO'),
    email: "",
    roles: JSON.parse(localStorage.getItem('roles')!),
    isAuth: !!localStorage.getItem('token'),
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
    logOut: (state) => {
      state.user = {
        id: 0,
        username: "",
        email: "",
        roles: "",
        isAuth: false,
      };

      // Также очищаем данные из LocalStorage
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("roles");
    },
  },
});

export const { saveUser, setIsAuth, logOut } =
  userSlice.actions;

export default userSlice.reducer;
