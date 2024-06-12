import PageWrapper from "components/ui/PageWrapper";
import { ATTENDANCE_URL, GENERAL_STATISTICS_URL, GRADE_URL } from "const";
import { ITableData } from "models/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { setIsLoaded, setTableData } from "redux/slices/tableDataSlice";
import { fetchTableData } from "services/journalService";
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
  const { id } = useParams();

  const dispatch = useDispatch();

  const getSelectTableData = (tableId: number) => {
    // Получение данных при загрузке страницы с списко кафедр
    fetchTableData(tableId).then((res) => {
      // Фильтруем данные для нужной нам таблицы
      const filterRows = res.info.filter(tableInfo => tableInfo.disciplineId === id);

      // Перезаписываем объект данных таблицы найденными данными
      const changeResponse: ITableData = {
        ...res,
        info: filterRows
      }

      // Сохраняем измененный объект таблицы в стор (Redux)
      dispatch(setTableData(changeResponse));

      dispatch(setIsLoaded(true));
      });
  }

  useEffect(() => {
    // При первом рендере страницы происходит редирект на страницу с успеваемостью, чтобы сразу отобразить блок таблицы
    navigate(ATTENDANCE_URL);

    dispatch(setIsLoaded(false));
    // Получение данных с "сервера"
    getSelectTableData(1)
  }, [])

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center min-h-[650px]">
        <div className="flex mb-[50px] justify-center shrink-0">
          <h2 className="text-[36px] mr-[88px]">Группа бВМ-201</h2>
          <h2 className="text-[36px]">Название дисциплины</h2>
        </div>
        <ul className="flex justify-center mb-[24px] shrink-0">
          {journalRoutes.map((route, index) => (
            <li
              key={index}
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
