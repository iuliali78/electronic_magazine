import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITableData } from "models/api";
import { BaseColumn, RowModel } from "models/table";
import moment from "moment";

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

    addDateRow(state: tableDataState, action: PayloadAction<RowModel>) {
      // Определяем индекс последней колонки в таблице до добавления
      const lastColumnIndex = state.tableData?.columns[state.tableData?.columns.length - 1]?.field.split('-')[1];
  
      // Добавление новых данныхв таблицу
      const newColumn: BaseColumn = {
          id:(state.tableData?.columns.length || 1) + 1,
          field: `dateNumber-${Number(lastColumnIndex) + 1}`,
          type: "string",
          headerName: "Дата"
      }
      console.log(action.payload);
      if(state.tableData) {
        // Добавляем новую колонку в таблицу
        state.tableData.columns.push(newColumn);
        // Добавляем значение даты в данную колонку
        state.tableData.info[0].rows = state.tableData.info[0].rows.map(row => {
          if(row.isDateRow) return {...row, [`dateNumber-${Number(lastColumnIndex) + 1}`]: moment(action.payload.date).format("YYYY-MM-DD") }
          return row;
        })
      } 
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

export const { setTableData, setIsLoaded, editRow, addDateRow } = tableDataSlice.actions;

export default tableDataSlice.reducer;
