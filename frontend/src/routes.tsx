import {
  ATTENDANCE_URL,
  AUTH_URL,
  GENERAL_STATISTICS_URL,
  GRADE_URL,
  JOURNAL_URL,
  LIST_DEPARTMENTS_URL,
  MAIN_URL,
  SINGUP_URL,
  USER_PAGE_URL,
} from "const";
import Auth from "./pages/Auth";
import Signup from "pages/Signup";
import Home from "pages/Home";
import Journal from "pages/Journal";
import User from "pages/User";
import ListDepartments from "pages/ListDepartments";
import {
  AttendanceBlock,
  GeneralStaisticsBlock,
  GradeBlock,
} from "components/ui/journal";
import { IRoute } from "models/other";

export const routes: IRoute[] = [
  {
    id: 0,
    url: AUTH_URL,
    Component: <Auth />,
  },
  {
    id: 1,
    url: SINGUP_URL,
    Component: <Signup />,
  },
];

export const authRoutes: IRoute[] = [
  {
    id: 0,
    url: MAIN_URL,
    Component: <Home />,
  },
  {
    id: 1,
    url: JOURNAL_URL,
    Component: <Journal />,
    nestedComponents: [
      {
        id: 0,
        url: ATTENDANCE_URL,
        Component: <AttendanceBlock />,
      },
      {
        id: 1,
        url: GRADE_URL,
        Component: <GradeBlock />,
      },
      {
        id: 2,
        url: GENERAL_STATISTICS_URL,
        Component: <GeneralStaisticsBlock />,
      },
    ],
  },
  {
    id: 2,
    url: USER_PAGE_URL,
    Component: <User />,
  },
  {
    id: 3,
    url: LIST_DEPARTMENTS_URL,
    Component: <ListDepartments/>
  }
];
