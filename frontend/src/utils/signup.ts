import { ROLES } from "const";

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
