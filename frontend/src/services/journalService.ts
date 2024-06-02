import { MOCK_TABLEDATA_URL } from "const"
import { $mockHost } from "./authService";
import { IResponseTableData } from "models/api";

// Получение данных для таблиц
export const getTableData = async (): Promise<IResponseTableData[]> => {
    const { data } = await $mockHost.get(MOCK_TABLEDATA_URL);

    return data;
}