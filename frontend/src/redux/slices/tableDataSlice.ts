import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITableData } from "models/api";
import { BaseColumn, RowModel } from "models/table";
import moment from "moment";

type TResult = Record<string, string>;

interface tableDataState {
  tableData: ITableData | null;
  isLoaded: boolean;
  attendanceTotal: TResult;
  gradeTotal: TResult;
}

const initialState: tableDataState = {
  tableData: null,
  isLoaded: true,
  attendanceTotal: {},
  gradeTotal: {}
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

      if(state.tableData) {
        // Добавляем новую колонку в таблицу
        state.tableData.columns.push(newColumn);
        // Добавляем значение даты в данную колонку
        state.tableData.info[0].rows = state.tableData.info[0].rows.map(row => {
          if(row.isAdditionalRow && !row.isTypeLesson) return {...row, [`dateNumber-${Number(lastColumnIndex) + 1}`]: moment(action.payload.date).format("YYYY-MM-DD") }
        // Добавляем тип занятия в данную колонку, если есть такое значение в переданном объекте
          if(row.isTypeLesson) return {...row, [`dateNumber-${Number(lastColumnIndex) + 1}`]: action.payload.lessonType.text }
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

    setAttendanceTotal(state: tableDataState, action: PayloadAction<TResult>) {
      state.attendanceTotal[action.payload.numberRecord] = action.payload.result;
    },

    setGradeTotal(state: tableDataState, action: PayloadAction<TResult>) {
      state.gradeTotal[action.payload.numberRecord] = action.payload.result;
    },

    clearTableData(state: tableDataState) {
      state.tableData = null;
    }
  },
});

export const { setTableData, setIsLoaded, editRow, addDateRow, setAttendanceTotal, setGradeTotal, clearTableData } = tableDataSlice.actions;

export default tableDataSlice.reducer;
