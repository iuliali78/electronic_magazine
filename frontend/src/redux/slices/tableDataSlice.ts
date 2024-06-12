import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITableData } from "models/api";

interface tableDataState {
  tableData: ITableData | null;
  isLoaded: boolean;
}

const initialState: tableDataState = {
    tableData: null,
    isLoaded: true
};

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setTableData(state: tableDataState, action:PayloadAction<ITableData>) {
      state.tableData = action.payload;
    },

    setIsLoaded(state: tableDataState, action:PayloadAction<boolean>) {
        state.isLoaded = action.payload;
    }
  },
});

export const { setTableData, setIsLoaded } = tableDataSlice.actions;

export default tableDataSlice.reducer;
