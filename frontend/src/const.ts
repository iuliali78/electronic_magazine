export const MAIN_URL = "/home";

// аутентификация/регистрация
export const AUTH_URL = "/signin";
export const SINGUP_URL = "/signup";

// Основной контент
export const USER_PAGE_URL = "/user-page";
export const STATISTICS_URL = "/statistics";

export const JOURNAL_URL = "/journal";
// Вложенные маршруты для страницы с журналом
export const ATTENDANCE_URL = "attendance";
export const GRADE_URL = "grade";
export const GENERAL_STATISTICS_URL = "general-statistics";

//список возможных статусов
export enum VARIANTS_STATUS {
  ANALYSIS = "analysis",
  ACCEPTED = "accepted",
  CANCELED = "canceled",
  POSTPONED = "postponed",
}

//изначальные значения сообщения запросов
export const initialValuesMessage = {
  message: "",
  success: false,
};

//значения ролей пользователей
export enum ROLES {
  ROLE_STUDENT = "Студент",
  ROLE_TEACHER = "Преподаватель",
  ROLE_DEAN = "Декан", // :)
}

//список ролей в выпадающем списке
export const userTypes = {
  options: [
    { name: "Студент", id: 0 },
    { name: "Преподаватель", id: 1 },
    { name: "Декан", id: 2 },
  ],
};

//пути для запроса на бекенд
export const API_URL = "http://localhost:8080";
export const BASE_API_AUTH_URL = "/api/auth";
export const LOGIN_URL = "/login";
export const BACK_SIGNUP_URL = "/registration";

//пути для запроса mock данных (используется mockApi)
export const MOCK_API_URL = "https://665ca60f3e4ac90a04da399f.mockapi.io/api"
export const MOCK_TABLEDATA_URL = "/tableData"