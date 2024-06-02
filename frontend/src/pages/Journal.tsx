import PageWrapper from "components/ui/PageWrapper";
import { ATTENDANCE_URL, GENERAL_STATISTICS_URL, GRADE_URL } from "const";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { createDynamicStyles } from "utils/other";

const journalRoutes = [
  {
    url: ATTENDANCE_URL,
    name: "Посещаемость",
  },
  {
    url: GRADE_URL,
    name: "Успеваемость",
  },
  {
    url: GENERAL_STATISTICS_URL,
    name: "Общая статистика",
  },
];

const Journal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // При первом рендере страницы происходит редирект на страницу с успеваемостью, чтобы сразу отобразить блок таблицы
    navigate(ATTENDANCE_URL);
  }, [])

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center">
        <div className="flex mb-[50px] justify-center">
          <h2 className="text-[36px] mr-[88px]">Группа бВМ-201</h2>
          <h2 className="text-[36px]">Название дисциплины</h2>
        </div>
        <ul className="flex justify-center mb-[24px]">
          {journalRoutes.map((route) => (
            <li
              className={createDynamicStyles(
                location.pathname.includes(route.url),
                "text-[28px] rounded-[15px] border-[1px] border-solid border-[#93A8F4] py-[5px] px-[23px] mr-[176px] last:mr-[0px]",
                "bg-[#FFFFFF]"
              )}
            >
              <Link to={route.url}>{route.name}</Link>
            </li>
          ))}
        </ul>
        {/* Отображение вложенного компонента при соответствующем url */}
        <Outlet />
      </div>
    </PageWrapper>
  );
};

export default Journal;
