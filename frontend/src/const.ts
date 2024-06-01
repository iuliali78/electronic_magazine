export const MAIN_URL = "/";
export const AUTH_URL = "/signin";
export const SINGUP_URL = "/signup";
export const JOURNAL_URL = "/journal";
export const USER_PAGE_URL = "/user-page";
export const STATISTICS_URL = "/statistics";

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
