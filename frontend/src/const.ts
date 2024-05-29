export const MAIN_URL = "/";
export const AUTH_URL = "/signin";
export const SINGUP_URL = "/signup";


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
  ROLE_USER = "Пользователь",
  ROLE_EXPERT = "Эксперт",
  ROLE_BOSS = "Руководитель", // :)
}

//пути для запроса на бекенд
export const API_URL = "http://localhost:8080";
export const BASE_API_AUTH_URL = "/api/auth";
export const LOGIN_URL = "/login";
export const BACK_SIGNUP_URL = "/register";
