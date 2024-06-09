import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface modalState {
  isVisible: boolean;
  children: ((props: any) => React.ReactElement) | null;
  title: string;
  props: any;
}

const initialState: modalState = {
  isVisible: false,
  children: null,
  title: "Заголовок",
  props: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsVisible(state: modalState, action: PayloadAction<boolean>) {
        state.isVisible = action.payload;
    },

    showComponentInModal(state: modalState, action: PayloadAction<Omit<modalState, "isVisible">>) {
      state.children = action.payload.children;
      state.title = action.payload.title;
      state.props = action.payload.props;
 
      state.isVisible = true;
    },
  },
});

export const { setIsVisible, showComponentInModal } = modalSlice.actions;

export default modalSlice.reducer;
