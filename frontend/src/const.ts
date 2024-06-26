export const MAIN_URL = "/home";

// аутентификация/регистрация
export const AUTH_URL = "/signin";
export const SINGUP_URL = "/signup";

// Основной контент
export const USER_PAGE_URL = "/user-page";
export const STATISTICS_URL = "/statistics";

export const LIST_DEPARTMENTS_URL = "/list-departments"

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
    { text: "Студент", value: "student", id: 0 },
    { text: "Преподаватель", value: "teacher", id: 1 },
    { text: "Декан", value: "dean", id: 2 },
  ],
};

//список ролей в выпадающем списке
export const groupsTypes = {
  options: [
    { text: "бВМ-201", value: "vm201", id: 0 },
    { text: "бВМ-211", value: "vm211", id: 1 },
    { text: "бИВТ-222", value: "ivt222", id: 2 },
    { text: "бПО-211", value: "po211", id: 3 },
    { text: "бПО-201", value: "po201", id: 4 },
    { text: "бИСТ-225", value: "ist225", id: 5 },
    { text: "бОИС-211", value: "bois211", id: 6 },
  ],
};

//список отметок присутсвия в выпадающем списке
export const presenceMarks = {
  options: [
    { text: "П", value: "present", id: 0 },
    { text: "Н", value: "absent", id: 1 },
    { text: "Б", value: "ill", id: 2 },
  ],
};

//список оценок в выпадающем списке
export const estimationTypes = {
  options: [
    { text: "5", value: "five", id: 0 },
    { text: "4", value: "four", id: 1 },
    { text: "3", value: "three", id: 2 },
    { text: "2", value: "two", id: 3 },
  ],
};

//список типов занятий в выпадающем списке
export const lessonTypes = {
  options: [
    { text: "ЛР", value: "laboratoryWork", id: 0 },
    { text: "ПР", value: "practicalWork", id: 1 },
    { text: "Экзамен", value: "exam", id: 2 },
    { text: "Зачет", value: "test", id: 3 },
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