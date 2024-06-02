import PageWrapper from "components/ui/PageWrapper";
import { ATTENDANCE_URL, GENERAL_STATISTICS_URL, GRADE_URL } from "const";
import { Link, Outlet, useLocation } from "react-router-dom";
import { createDynamicStyles } from "utils/other";

const journalRoutes = [
  {
    url: ATTENDANCE_URL,
    name: "Посещаемость",
  },
  {
    url: GENERAL_STATISTICS_URL,
    name: "Успеваемость",
  },
  {
    url: GRADE_URL,
    name: "Общая статистика",
  },
];

const Journal = () => {
  const location = useLocation();

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center">
        <div className="flex mb-[50px]">
          <h2 className="mb-[100px] text-[36px] mr-[88px]">Группа бВМ-201</h2>
          <h2 className="text-[36px]">Название дисциплины</h2>
        </div>
        <ul className="flex justify-between">
          {journalRoutes.map((route) => (
            <li
              className={createDynamicStyles(
                location.pathname === route.url,
                "text-[28px] rounded-[15px] border-[1px] border-solid border-[#93A8F4] py-[5px] px-[23px] mr-[176px] last:mr-[0px]",
                "bg-[#FFFFFF]"
              )}
            >
              <Link to={route.url}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </PageWrapper>
  );
};

export default Journal;
