import { AUTH_URL, JOURNAL_URL, MAIN_URL, SINGUP_URL, USER_PAGE_URL } from "const";
import { IRoute } from "models/other";
import Auth from "./pages/Auth";
import Signup from "pages/Signup";
import Home from "pages/Home";
import Journal from "pages/Journal";
import User from "pages/User";

export const routes: IRoute[] = [
    {
        id: 0,
        url: AUTH_URL,
        Component: <Auth/>
    },
    {
        id: 1,
        url: SINGUP_URL,
        Component: <Signup/>
    }
]

export const authRoutes: IRoute[] = [
    {
        id: 0,
        url: MAIN_URL,
        Component: <Home/>
    },
    {
        id: 1,
        url: JOURNAL_URL,
        Component: <Journal/>
    },
    {
        id: 2,
        url: USER_PAGE_URL,
        Component: <User/>
    }
]