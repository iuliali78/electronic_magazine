import PageWrapper from "components/ui/PageWrapper";
import { ATTENDANCE_URL, GENERAL_STATISTICS_URL, GRADE_URL } from "const";
import { ITableData } from "models/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { clearTableData, setIsLoaded, setTableData } from "redux/slices/tableDataSlice";
import { RootState } from "redux/store";
import { fetchTableData } from "services/journalService";
import { createDynamicStyles } from "utils/other";

const journalRoutes = [
  {
    tableId: 1,
    url: ATTENDANCE_URL,
    name: "Посещаемость",
  },
  {
    tableId: 2,
    url: GRADE_URL,
    name: "Успеваемость",
  },
  {
    tableId: 3,
    url: GENERAL_STATISTICS_URL,
    name: "Общая статистика",
  },
];


const Journal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // Данные из стора
  const { tableData, isLoaded } = useSelector((state: RootState) => state.tableDataSlice)

  const dispatch = useDispatch();

  const getSelectTableData = (tableId: number) => {
    dispatch(setIsLoaded(false));
    dispatch(clearTableData());
    // Получение данных при загрузке страницы с списком кафедр
    fetchTableData(tableId).then((res) => { 
      // Фильтруем данные для нужной нам таблицы
      // TODO: сделать фильтрацию данных по роли. Преподаватель - все строки, Студент - его личная строка
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

  const handleClickTab = (tableId: number, route: string) => {
    navigate(route);
    getSelectTableData(tableId);
  }

  useEffect(() => {
    // При первом рендере страницы происходит редирект на страницу с успеваемостью, чтобы сразу отобразить блок таблицы
    navigate(ATTENDANCE_URL);

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
                "text-[28px] rounded-[15px] border-[1px] border-solid border-[#93A8F4] py-[5px] px-[23px] mr-[176px] last:mr-[0px] duration-[250ms] hover:bg-[#FFFFFF] cursor-pointer",
                "bg-[#FFFFFF]"
              )}
              onClick={() => handleClickTab(route.tableId, route.url)}
            >
              <span>{route.name}</span>
            </li>
          ))}
        </ul>
        {/* Отображение вложенного компонента при соответствующем url */}
        <Outlet context={{tableData, isLoaded}}/>
      </div>
    </PageWrapper>
  );
};

export default Journal;
