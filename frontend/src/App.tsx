import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RootState } from "./redux/store";
import { AUTH_URL, MAIN_URL } from "./const";
import Header from "./components/ui/Header";
import { authRoutes, routes } from "routes";
import Sidebar from "components/ui/Sidebar";

function App() {
  const navigate = useNavigate();

  const isAuthUser = useSelector(
    (state: RootState) => state.userSlice.user.isAuth
  );

  React.useEffect(() => {
    console.log(isAuthUser);
    if (!isAuthUser) {
      navigate(AUTH_URL);
    } else {
      navigate(MAIN_URL);
    }
  }, [isAuthUser]);

  return (
    <div className="wrapper mb-[15px]">
      {/* Шапка и сайдбар отображаются в зависимости от авторизации пользователя на сайте */}
      {isAuthUser ? <Header /> : ""}
      {isAuthUser ? <Sidebar /> : ""}
      <main>
        <Routes>
          {!isAuthUser
            ? routes.map(({ id, url, Component }) => (
                <Route key={id} path={url} element={Component} />
              ))
            : authRoutes.map(({ id, url, Component }) => (
                <Route key={id} path={url} element={Component} />
              ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
