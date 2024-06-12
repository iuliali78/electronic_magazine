import { MOCK_TABLEDATA_URL } from "const"
import { $mockHost } from "./authService";
import { ITableData } from "models/api";

// Получение данных для таблиц
export const fetchTableData = async (id: number): Promise<ITableData> => {
    const { data } = await $mockHost.get(MOCK_TABLEDATA_URL + "/" + id);

    return data;
}