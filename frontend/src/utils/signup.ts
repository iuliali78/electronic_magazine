import { ROLES } from "const";

export const defineRole = (role: string) => {
  switch (role) {
    case ROLES.ROLE_DEAN:
      return "admin";
    case ROLES.ROLE_TEACHER:
      return "mod";
    default:
      return "";
  }
};
