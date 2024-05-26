import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string;
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
    username: "",
    email: "",
    roles: "",
    isAuth: false,
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
    },
  },
});

export const { saveUser, setIsAuth, logOut } =
  userSlice.actions;

export default userSlice.reducer;
