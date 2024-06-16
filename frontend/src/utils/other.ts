import { Options } from "models/modal";
import { ROLES } from "const";

interface FIO {
  name: string;
  surname: string;
  patronymic: string;
}

// Функция для создания динамичных стилей в зависимости от условия. Например отображение активной ссылки в сайдбаре
export const createDynamicStyles = (
  condition: boolean,
  initialStyles: string,
  additionalStyles: string
) => {
  if (condition) {
    return initialStyles.concat(" " + additionalStyles);
  }

  return initialStyles;
};

//  Функция для конвертации одной строки имени пользователя в формат ФИО
export const splitUsernameToFio = (username: string): FIO => {
  const FIO = username.split(" ");

  return {
    name: FIO[1],
    surname: FIO[0],
    patronymic: FIO[2],
  };
};

export const mapComponentInModal = <T>(children: (props: T) => any, options: Options<T>) => {
  if (options) {
    return {
      children: children,
      title: options.title,
      props: options.props,
    };
  }

  return {
    children: children,
    title: "Заголовок",
    props: null,
  };
};

export const defineRole = (role: string) => {
  switch (role) {
    case ROLES.ROLE_DEAN:
      return "admin";
    case ROLES.ROLE_TEACHER:
      return "mod";
    case ROLES.ROLE_STUDENT:
      return "user";
    default:
      return "";
  }
};
