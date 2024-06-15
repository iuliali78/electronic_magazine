import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITableData } from "models/api";
import { RowModel } from "models/table";

interface tableDataState {
  tableData: ITableData | null;
  isLoaded: boolean;
}

const initialState: tableDataState = {
  tableData: null,
  isLoaded: true,
};

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setTableData(state: tableDataState, action: PayloadAction<ITableData>) {
      state.tableData = action.payload;
    },

    editRow(state: tableDataState, action: PayloadAction<RowModel>) {
      // Обновление строки в таблице новыми данными
      state.tableData!.info[0].rows = state.tableData!.info[0].rows.map(
        (row) => {
          if(row?.numberRecord === action.payload.numberRecord) return { ...action.payload };
          return row;
        }
      );
    },

    setIsLoaded(state: tableDataState, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
  },
});

export const { setTableData, setIsLoaded, editRow } = tableDataSlice.actions;

export default tableDataSlice.reducer;
