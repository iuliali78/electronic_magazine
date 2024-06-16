import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
  id: string | null;
  username: string | null;
  email: string | null;
  role: string | null;
  isAuth: boolean;
};

export interface userState {
  user: User;
}

const initialState: userState = {
  user: {
    id: localStorage.getItem('userId'),
    username: localStorage.getItem('FIO'),
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
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
        id: null,
        username: "",
        email: "",
        role: "",
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
